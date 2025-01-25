export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

export interface UserDto{
    name: string;
    surname: string;
    patronimic: string;
    email: string;
    role: UserRole;
}