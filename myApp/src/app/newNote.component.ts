import { NavController, NavParams } from 'ionic-angular';

import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { notesComponent } from './notes.component';
import { CategorieService } from './categorie.service';

@Component({
    selector : 'new-note', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/newNoteForm.component.html',
})

export class newNoteComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedNote: any;
    @Input() categories: any;

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
            noteContent: new FormControl()
        });
    }

    onCanceled() {
        this.cancelEvent.emit();
    }

    onNoteSubmit() {
        this.submitEvent.emit(this.modifiedNote);
    }
}
