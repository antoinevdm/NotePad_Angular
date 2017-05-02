"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var note_service_1 = require('./note.service');
var categorie_service_1 = require('./categorie.service');
var notesComponent = (function () {
    function notesComponent(noteService, categorieService) {
        this.noteService = noteService;
        this.categorieService = categorieService;
        this.display = false;
        this.selectedNote = 0;
        this.noteToModify = null;
        this.emptyNote = [{
                "title": "",
                "content": "",
                "date": "",
                "id": 0,
                "categorie": {
                    "id": 0,
                    "name": ""
                }
            }];
    }
    notesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get notes.
        this.noteService.getNotes().subscribe(function (data) { _this.notes = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('notes charged'); });
        this.categorieService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('categories charged'); });
    };
    notesComponent.prototype.modifyNote = function (note) {
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
    };
    notesComponent.prototype.onSubmitEvent = function (note) {
        this.display = false;
        if (this.selectedNote == 0) {
            this.notes.push(note);
            this.noteService.createNote(note).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('note added'); });
        }
        else {
            this.noteService.updateNote(note).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('note updated'); });
        }
    };
    notesComponent.prototype.deleteNote = function (note) {
        this.noteService.deleteNote(note).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('note deleted'); });
        var index = this.notes.findIndex(function (n) { return (n === note); });
        if (index != -1) {
            this.notes.splice(index, 1);
        }
    };
    notesComponent = __decorate([
        core_1.Component({
            selector: 'note',
            //template: '<new-note></new-note>',
            templateUrl: 'app/templates/notes.html',
            providers: [note_service_1.NoteService, categorie_service_1.CategorieService],
        }), 
        __metadata('design:paramtypes', [note_service_1.NoteService, categorie_service_1.CategorieService])
    ], notesComponent);
    return notesComponent;
}());
exports.notesComponent = notesComponent;
//# sourceMappingURL=notes.component.js.map