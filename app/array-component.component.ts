import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-array-component',
 template: `
    <h2>String Array from Custom Component</h2>
    <ul >
        <li  *ngFor="let item of stringArray">{{item}}</li>
    </ul>
    <hr>
    
  `
})
export class ArrayComponentComponent{

public stringArray:string[];

  constructor() {
   }

  @Input() 
  set arrayInput(value: string[]) {
    this.stringArray = value;
   }
}
