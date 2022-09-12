import { UserInterface } from "src/app/shared/types/user"

export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser?: UserInterface;
    isLoggedIn?: boolean;
    validationErrors?: any;
    isLoading?: boolean;
}