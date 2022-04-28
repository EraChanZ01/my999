export enum ROLE {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}


export interface IIdentity {
    userId: any;
    firstName: string,
    lastName: string,
    userEmail: string;
    token?: string;
    role: ROLE;
   

}