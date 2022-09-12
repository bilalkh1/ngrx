import { createReducer, on, Action } from "@ngrx/store";
import { FeedStateInterface } from "../types/feed-state.interface";
import { getFeedAction, getFeedFailure, getFeedSuccessAction } from "./actions/get-feed.action";

const initialState: FeedStateInterface = {
    data: null,
    isLoading: false,
    error: null
}

const feedReducer = createReducer(
    initialState,
    on(getFeedAction, (state): FeedStateInterface => ({
        ...state,
        isLoading: true
    })),
    on(getFeedSuccessAction, (state, action): FeedStateInterface => ({
        ...state,
        isLoading: false,
        data: action.feed
    })),
    on(getFeedFailure, (state): FeedStateInterface => ({
        ...state,
        isLoading: false,
        error: 'ERROR'
    })),
)

export function reducers(state: FeedStateInterface, action:Action) {
    return feedReducer(state, action);
}