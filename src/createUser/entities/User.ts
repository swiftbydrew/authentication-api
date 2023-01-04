import { uuid } from "uuidv4";

export class UserEntity {
    public readonly id: string;
    public email: string;
    public fullname: string;
    public birthday: string;
    public password: string;

    constructor(props: Omit<UserEntity, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}