import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[myUpper]'
})
export class UpperDirective {
  constructor(private e: ElementRef, private r: Renderer) { 
    
      r.setElementStyle(e.nativeElement,  'text-transform', 'uppercase')
  }

 
}
