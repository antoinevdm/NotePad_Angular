import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId : module.Id;
    selector : 'new-note', //selector "my-app" can be used as a html tag now
    templateUrl : 'app/templates/newNoteForm.component.html',
})

export class newNoteComponent implements OnInit {

    categories = ['todo', 'remarque',
            'ne pas oublier', 'important'];

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
            noteContent: new FormControl()
        });
    }

    onNoteSubmit() {

    }
}
