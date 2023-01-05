export interface JwtProviderInterface {
    jwtSign(id: string): Promise<string>;
}