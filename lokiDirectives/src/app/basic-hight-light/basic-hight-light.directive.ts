import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[basicHightLight]'
})
export class BasicHightLightDirective implements OnInit{

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'lightblue';
  }
}