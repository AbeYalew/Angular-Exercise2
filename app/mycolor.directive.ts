import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
  
  }
private colorArray = ['green','yellow','red','white','black','blue'];
private i=0;
  
@HostBinding('style.color') myColors;
  @HostListener('click')onClick() {  
    if(this.i>=this.colorArray.length){
      this.i=0;
    }
      this.myColors=this.colorArray[this.i];
      this.i++;
   }

}
