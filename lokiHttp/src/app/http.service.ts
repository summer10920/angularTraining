import { PostModel } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  errSubject = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  addPost(postData: PostModel) {
    this.http.post(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData
    ).subscribe(
      response => console.log(response),
      err => this.errSubject.next(err)
    );
  }

  fetchPost() {
    return this.http.get<{ [key: string]: PostModel }>(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    ).pipe(
      map(responseData => {
        console.log(responseData);
        const postAry: PostModel[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key))
            postAry.push({ ...responseData[key], id: key })
        }
        return postAry;
      }),
      catchError(errorRes => { //catchError可以幫助我們在回傳前做些事
        return throwError(errorRes);
      })
    );
    // ).subscribe(response => {
    //   this.loading = false; //※重點
    //   this.loadedPosts = response;
    // });
  }

  deletePostAll() {
    return this.http.delete(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    );
  }
}