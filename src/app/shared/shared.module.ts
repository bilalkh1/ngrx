import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FeedComponent } from './components/feed/feed.component';



@NgModule({
  declarations: [
    TopbarComponent,
    FeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    FeedComponent
  ]
})
export class SharedModule { }
