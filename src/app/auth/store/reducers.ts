import { act } from "@ngrx/effects";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/get-current-user.actions";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.actions";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,
    isLoading: false
};


const authReducer = createReducer(
    initialState, 
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(registerFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: false,
        currentUser: null,
        validationErrors: "ERROR"
    })),
    on(loginAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        validationErrors: null,
        currentUser: action.currentUser
    })),
    on(loginFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: false,
        validationErrors: 'ERROR',
        currentUser: null
    })),
    on(getCurrentUserAction, (state): AuthStateInterface => ({
        ...state,
        isLoading: true,
    })),
    on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        currentUser: action.currentUser
    })),
    on(getCurrentUserFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isLoading: false,
        validationErrors: 'ERROR',
        isLoggedIn: false
    }))

);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}