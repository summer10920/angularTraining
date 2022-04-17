import {
  Component, Input, ViewEncapsulation,
  OnInit, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy,
  ViewChild, ElementRef,
  ContentChild //宣告來源
} from '@angular/core';

@Component({
  selector: 'app-server-el',
  templateUrl: './server-el.component.html',
  styleUrls: ['./server-el.component.css'],
  encapsulation: ViewEncapsulation.None  //關閉封裝功能
})
export class ServerElComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input('srcElement') element: { type: string, name: string, content: string };
  @Input() name: String; //為了能被Angular偵測到變化，多一個input做前後改變

  @ViewChild('cardHeader') cardHeader: ElementRef;
  @ContentChild('contentPpp') contentByApp: ElementRef;


  constructor() {
    console.log('0th is constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('1st is ngOnChange');
    console.log(changes);
  }

  ngOnInit() {
    console.log('2nd is ngOnInit');
    console.error('2nd View: ' + this.cardHeader);
    console.warn('2nd Content: ' + this.contentByApp);
  }

  ngDoCheck() {
    console.log('3rd is ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('4th is ngAfterContentInit');
    console.warn('4th Content: ' + this.contentByApp);
  }
  ngAfterContentChecked() {
    console.log('5th is ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('6th is ngAfterViewInit');
    console.error('6td View: ' + this.cardHeader);

  }
  ngAfterViewChecked() {
    console.log('7th is ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('8th is ngOnDestroy');
  }
}