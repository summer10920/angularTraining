import { HttpService } from './http.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostModel } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  loading = false; //※重點
  errorResponse = null;
  private errSubject: Subscription;

  constructor(
    private http: HttpClient,
    private HttpService: HttpService
  ) { }

  ngOnInit() {
    this.errSubject = this.HttpService.errSubject.subscribe(errMsg => {
      this.errorResponse = errMsg;
      console.log(errMsg);
    });
    this.fetchPosts();
  }

  ngOnDestroy() {
    this.errSubject.unsubscribe();
  }

  onCreatePost(postData: PostModel) {
    this.HttpService.addPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.HttpService.deletePostAll().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.loading = true;

    this.HttpService.fetchPost().subscribe(response => {
      this.loading = false;
      this.loadedPosts = response;
    }, err => { //※重點
      console.log(err);
      this.errorResponse = err;
    });
  }
}
