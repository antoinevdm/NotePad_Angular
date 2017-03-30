import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { newNoteComponent } from  './newNote.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, newNoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
