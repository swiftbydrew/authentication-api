import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', process.env.JWT_SIGN).trim();
    try {
        const data = jwt.verify(token, process.env.JWT_SIGN)
        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
    } catch {
        return res.sendStatus(401);
    }
}