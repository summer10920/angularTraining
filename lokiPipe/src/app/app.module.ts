import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortTextPipe } from './short-text.pipe';
import { FilterStringPipe } from './filter-string.pipe'; //※重點

@NgModule({
  declarations: [
    AppComponent,
    ShortTextPipe,
    FilterStringPipe //※重點
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
