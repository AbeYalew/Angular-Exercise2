import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ArrayComponentComponent } from './array-component.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityrDirective } from './myvisibilityr.directive';
import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
   
    ArrayComponentComponent,
    UpperDirective,
    MyvisibilityrDirective,
    MycolorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
