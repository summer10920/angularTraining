import { PostModel } from './post.model';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
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
      postData,
      {
        observe: 'response'
      }
    ).subscribe(
      response => console.log(response),
      err => this.errSubject.next(err)
    );
  }

  fetchPost() {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('CustomHeader', 'Loki Jiang');
    myHeaders = myHeaders.append('Authorization', 'my-auth-token');

    let myParams = new HttpParams();
    myParams = myParams.append('print', 'pretty');
    myParams = myParams.append('todo', 'add');

    return this.http.get<{ [key: string]: PostModel }>(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        headers: myHeaders,
        // headers: new HttpHeaders({
        //   CustomHeader: 'Loki Jiang',
        //   Authorization: 'my-auth-token'
        // }),
        params: myParams
        // params: new HttpParams().set('article', '3')
      }
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
      catchError(errorRes => throwError(errorRes))
    );
  }

  deletePostAll() {
    return this.http.delete(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) console.log('刪除提交中');
        if (event.type === HttpEventType.Response) console.log('刪除已回應');
        console.log(event);
      })
    );
  }
}