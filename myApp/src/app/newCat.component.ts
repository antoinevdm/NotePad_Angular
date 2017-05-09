import { NavController, NavParams } from 'ionic-angular';

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { categoriesComponent } from './categories.component';

@Component({
    selector : 'new-cat', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/newCatForm.component.html',
})

export class newCatComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedCat: any;

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
        });
    }

    onCanceled() {
        this.cancelEvent.emit();
    }

    onCatSubmit() {
        this.submitEvent.emit(this.modifiedCat);
    }
}
