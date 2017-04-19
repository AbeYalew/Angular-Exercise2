import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-array-component  myUpper [arrayInput]='stringArray'></app-array-component>
    
    <h2>*myvisibility</h2>
    
    <div>
      <h2 *myvisibility="condition"> Myvisibility Conditional Text </h2>
      <button (click)="condition = !condition">Swith</button>
    </div>
    <br>
    <hr>
    <div mycolor>Color Directive !! Touch to change Color </div>
    
  `,
  styles: ['.myBorder { border: 2px solid red; }',
           '.myColor  { color: green; }']
})
export class AppComponent {
    private condition = false;
    private stringArray = ['a','b','c','d','e'];
  
}
