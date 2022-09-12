import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { UserInterface } from "src/app/shared/types/user";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";

@Injectable()
export class LoginEffect {

    constructor(private actions$: Actions, private authService: AuthService, private persistanceService: PersistanceService, private router: Router) {}

    register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginAction), 
            switchMap(({request}) => {
                return this.authService.login(request).pipe(
                    map((currentUser: UserInterface) => {
                        console.log(currentUser);
                        this.persistanceService.set('token', currentUser.token);
                        return loginSuccessAction({currentUser});
                    }),
                    catchError((err) => {
                        return of(loginFailureAction);
                    })
                )
        }));
    });

    redirectAfterSubmit$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(loginAction),
                tap(() => {
                    this.router.navigateByUrl('/');
                })
            )
        },
        {dispatch: false}
    )

}