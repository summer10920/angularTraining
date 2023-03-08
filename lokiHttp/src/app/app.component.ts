import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostModel } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchPosts();
  }

  // onCreatePost(postData: { title: string; content: string }) {
  onCreatePost(postData: PostModel) {
    this.http.post(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData
    ).subscribe(response => console.log(response));
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    // this.http.get(
    this.http.get<{ [key: string]: PostModel }>(
      'https://loki-angular-training-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    ).pipe(
      // map(responseData => {
      // map((responseData: { [key: string]: PostModel }) => {
      map(responseData => {
        console.log(responseData);
        const postAry: PostModel[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key))
            postAry.push({ ...responseData[key], id: key })
        }
        return postAry;
      })
    ).subscribe(response => console.log(response));
  }
}
