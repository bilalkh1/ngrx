import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  onSubmit() {
    console.log("Submitted");
    this.store.dispatch(loginAction({
      request: {
        user: {
          email: 'bilal.khatab@outlook.fr',
          password: 'Hello',
        }
      }
    }));
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSbmitting');
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }


}
