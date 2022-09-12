import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';

  constructor(private store: Store) {

  }

  articles = [
    {
      "id": "215727626-edem-9217271",
      "slug": "article-1",
      "title": "hello article 1",
      "body": "lorem ipsum ...",
      "description": "Desc lorem ipsum",
      "favoritesCount": 0,
      "createdAt": "2022-01-12",
      "updatedAt": "2022-10-10",
    }
  ]

  ngOnInit() {
    this.store.dispatch(getCurrentUserAction());
  }

}
