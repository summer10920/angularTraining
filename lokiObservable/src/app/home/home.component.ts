import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'; //※重點
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private obsSubscriptionKey!: Subscription; //記住這個訂閱

  constructor() { }

  ngOnInit() {
    // this.obsSubscriptionKey = interval(1000).subscribe(count => console.log(count)); 
    const customIntervalObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {  //這是JS不是RxJS
        observer.next(count);
        if (count === 2)  //測試error要註解，不然跑不到 3
          observer.complete();
        if (count > 3)
          observer.error(new Error('Count is 3!')); //※重點 建立錯誤事件與資料包
        count++;
      }, 1000);
    });


    this.obsSubscriptionKey = customIntervalObs
      .pipe(
        filter(
          (data: any) => data > 0
        ),
        map( //※重點
          (data: any) => 'Round ' + (data + 1)
        )
      )
      .subscribe({
        next: res => console.log(res),
        error: err => console.error(err),
        complete: () => console.info('complete')
      });
  }

  ngOnDestroy(): void {
    this.obsSubscriptionKey.unsubscribe(); //取消訂閱
  }
}