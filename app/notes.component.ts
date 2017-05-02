import { Component, Output, Input } from '@angular/core';
//http://stackoverflow.com/questions/37252146/angular-2-redirect-on-click
import {newNoteComponent} from './newNote.component';
import { NoteService } from './note.service';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'note', //selector "my-app" can be used as a html tag now
  //template: '<new-note></new-note>',
  templateUrl : 'app/templates/notes.html',
  providers: [NoteService, CategorieService],
})

export class notesComponent {
    notes : any[];
    categories : any[];

    display: boolean = false;
    selectedNote: number = 0;
    noteToModify: any = null;

    constructor(private noteService: NoteService,
        private categorieService : CategorieService) { }

    emptyNote = [{
        "title" : "",
        "content" : "",
        "date" : "",
        "id" : 0,
        "categorie" : {
            "id" : 0,
            "name" : ""
        }
    }]

    ngOnInit() {
        // Get notes.
        this.noteService.getNotes().subscribe(
            data => { this.notes = JSON.parse(data); },
            err => console.log(err),
            () => console.log('notes charged')
        );

        this.categorieService.getCategories().subscribe(
            data => { this.categories = JSON.parse(data); },
            err => console.log(err),
            () => console.log('categories charged')
        );
    }

    modifyNote(note: any) {
        if (this.display == true && this.selectedNote == note.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedNote != note.id) {
            this.selectedNote = note.id;
            this.noteToModify = note;
        }
        else {
            this.display = !this.display;
            this.selectedNote = note.id;
            this.noteToModify = note;
        }
    }

    onSubmitEvent(note: any) {
        this.display = false;
        if (this.selectedNote == 0) {
            this.notes.push(note);
            this.noteService.createNote(note).subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('note added')
            );
        } else {
            this.noteService.updateNote(note).subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('note updated')
            );
        }
    }

    deleteNote(note : any) {
        this.noteService.deleteNote(note).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('note deleted')
        );

        let index = this.notes.findIndex((n) => (n === note));
        if (index != -1) {
           this.notes.splice(index, 1);
        }
    }
}
