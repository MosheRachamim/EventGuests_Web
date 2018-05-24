import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { GuestsArriveInfoComponent } from './guests-arrive-info/guests-arrive-info.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GuestsArriveInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
