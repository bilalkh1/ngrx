import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { UserInterface } from "src/app/shared/types/user";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/get-current-user.actions";

@Injectable()
export class GetCurrentUserEffect {

    constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistanceService) {}

    getCurrentUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getCurrentUserAction), 
            switchMap(() => {
                const token = this.persistanceService.get('token');
                if(!token) {
                    return of(getCurrentUserFailureAction());
                }
                return this.authService.getCurrentUser().pipe(
                    map((currentUser: UserInterface) => {
                        console.log(currentUser);
                        return getCurrentUserSuccessAction({currentUser});
                    }),
                    catchError((err) => {
                        return of(getCurrentUserFailureAction);
                    })
                )
        }));
    });

}