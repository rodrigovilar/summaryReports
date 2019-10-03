import { Directive, OnInit, ElementRef } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[app-button-choose]'
})
export class ButtonChooseDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initButtons();
  }

  protected initButtons(): void {
    jQuery(this.elementRef.nativeElement).uniform();
  }
}
