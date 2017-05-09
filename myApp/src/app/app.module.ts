import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { notesComponent } from './notes.component';
import { categoriesComponent } from './categories.component';
import { newNoteComponent } from './newNote.component';
import { newCatComponent } from './newCat.component';
import { aboutComponent } from './about.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    notesComponent,
    categoriesComponent,
    newNoteComponent,
    newCatComponent,
    aboutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    notesComponent,
    categoriesComponent,
    newCatComponent,
    newNoteComponent,
    aboutComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
