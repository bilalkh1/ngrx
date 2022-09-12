import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponse } from '../types/get-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeed(url: string): Observable<GetFeedResponse> {
    return this.http.get<GetFeedResponse>(`https://api.realworld.io/api/articles`);
  }

}
