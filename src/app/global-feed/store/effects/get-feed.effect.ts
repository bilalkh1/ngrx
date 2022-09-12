import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "../../services/feed.service";
import { GetFeedResponse } from "../../types/get-feed-response.interface";
import { getFeedAction, getFeedFailure, getFeedSuccessAction } from "../actions/get-feed.action";


@Injectable()
export class GetFeedEffect {

    constructor(private actions$: Actions, private feedService: FeedService) {}

    getFeed$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getFeedAction),
            switchMap(({url}) => {
                return this.feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponse) => {
                        return getFeedSuccessAction({feed})
                    }),
                    catchError(() => {
                        return of(getFeedFailure())
                    })
                )
            })
        )
    })

}