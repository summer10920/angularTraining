import { ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighLight]'
})
export class BetterHighLightDirective {
  @Input('appBetterHighLight') defaultColor: string = 'lightblue'; //可不指定value，改從外層讀出gray
  @Input() focusColor: string = 'lightgreen'; //可不指定value，改從外層讀出yellow
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(
    private elRef: ElementRef,
    private render: Renderer2
  ) {
    // this.backgroundColor = this.defaultColor; // 在這裡，會因為還沒準備好，導致初始下input不會指定到顏色
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor; // 在這裡，才能完整渲染出來
  }

  @HostListener('mouseenter') mouserover(eventData: Event) {
    this.backgroundColor = this.focusColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
