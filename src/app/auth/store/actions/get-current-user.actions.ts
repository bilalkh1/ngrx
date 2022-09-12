import { createAction, props } from "@ngrx/store";
import { UserInterface } from "src/app/shared/types/user";
import { ActionTypes } from "./action-types";


export const getCurrentUserAction = createAction(
    ActionTypes.GET_CURRENT_USER
)

export const getCurrentUserSuccessAction = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: UserInterface }>()
)

export const getCurrentUserFailureAction = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE
)