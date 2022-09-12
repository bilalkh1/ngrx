import { createAction, props } from "@ngrx/store";
import { RegisterRequest } from "src/app/shared/types/register-request";
import { UserInterface } from "src/app/shared/types/user";
import { ActionTypes } from "./action-types";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequest}>()
)

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SCCESS,
    props<{currentUser: UserInterface}>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE
)