import { Entity } from "./common";

export interface User extends Entity{
    /* complete User interface with some chosen properties */
    name: string
    email: string
    password: string
    role: "customer" | "admin"
    avatar: string
}
