import { Component, Output } from '@angular/core';
//http://stackoverflow.com/questions/37252146/angular-2-redirect-on-click
import {newNoteComponent} from './newNote.component';

@Component({
  selector: 'my-app', //selector "my-app" can be used as a html tag now
  //template: '<new-note></new-note>',
  templateUrl : 'app/templates/main.html',
})

export class AppComponent  {
    display: boolean = false;
    displayModify: boolean = false;
    selectedNote: number = 0;
    noteToModify: any = null;

    notes = [{
        "title" : "première note",
        "content" : "test",
        "date" : "22/03",
        "id" : 1,
        "categorie" : {
            "id" : 1,
            "name" : "remarque"
        }
    }, {
        "title" : "Seconde note",
        "content" : "test numéro 2",
        "date" : "22/04",
        "id" : 2,
        "categorie" : {
            "id" : 2,
            "name" : "to do"
        }
    }
    ]

    turnDisplay() {
        this.display = !this.display;
        console.log(this.display);
    }

    // TODO: DO input for modifing notes
    modifyNote(note: any) {
        this.displayModify = !this.displayModify;
        this.selectedNote = note.id;
        this.noteToModify = note;
    }
}
