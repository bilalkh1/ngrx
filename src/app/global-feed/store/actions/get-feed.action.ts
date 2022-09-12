import { createAction, props } from "@ngrx/store";
import { GetFeedResponse } from "../../types/get-feed-response.interface";
import { ActionTypes } from "../action-types";

export const getFeedAction = createAction(
    ActionTypes.GET_FEED, props<{ url: string }>()
)


export const getFeedSuccessAction = createAction(
    ActionTypes.GET_FEED_SUCCESS,
    props<{ feed: GetFeedResponse }>()
)


export const getFeedFailure = createAction(
    ActionTypes.GET_FEED_FAILURE
)