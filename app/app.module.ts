import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { newNoteComponent } from  './newNote.component';

const appRoutes: Routes = [
    { path: 'home', component: AppComponent},
    { path: 'newNote', component: newNoteComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, newNoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
