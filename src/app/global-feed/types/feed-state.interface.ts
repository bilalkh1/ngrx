import { GetFeedResponse } from "./get-feed-response.interface";

export interface FeedStateInterface {
    isLoading: boolean,
    error?: string,
    data?: GetFeedResponse,
    
}