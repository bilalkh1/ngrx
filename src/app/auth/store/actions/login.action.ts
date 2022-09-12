import { createAction, props } from "@ngrx/store";
import { LoginRequest } from "src/app/shared/types/login-register.interface";
import { UserInterface } from "src/app/shared/types/user";
import { ActionTypes } from "./action-types";


export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequest }>()
)

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: UserInterface}>()
)

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{currentUser: UserInterface}>()
)