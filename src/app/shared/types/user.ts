export interface UserInterface {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    bio?: string;
    token: string;
}