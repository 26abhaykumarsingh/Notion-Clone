import { User } from "./types";

declare global {
    interface CustomJwtSessionClaims extends User {
        fullName: string;
        email: string;
        image: string;
    }
}