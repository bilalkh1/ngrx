import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  onSubmit() {
    console.log("Submitted");
    this.store.dispatch(registerAction({
      request: {
        user: {
          email: 'bilal.khatab@outlook.fr',
          password: 'Hello',
          username: 'bilalkh1',
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
