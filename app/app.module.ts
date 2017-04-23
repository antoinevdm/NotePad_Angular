import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { notesComponent } from './notes.component';
import { newNoteComponent } from  './newNote.component';
import { categoriesComponent } from './categories.component';
import { newCatComponent } from './newCat.component';
import { aboutComponent } from './about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: notesComponent},
  { path: 'cat', component: categoriesComponent},
  { path: 'about', component: aboutComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, newNoteComponent, categoriesComponent,
                    notesComponent, newCatComponent, aboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
