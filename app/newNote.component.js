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
var forms_1 = require('@angular/forms');
var newNoteComponent = (function () {
    function newNoteComponent() {
        this.cancelEvent = new core_1.EventEmitter();
        this.submitEvent = new core_1.EventEmitter();
    }
    newNoteComponent.prototype.ngOnInit = function () {
        this.noteFormGroup = new forms_1.FormGroup({
            noteTitle: new forms_1.FormControl(),
            noteContent: new forms_1.FormControl()
        });
    };
    newNoteComponent.prototype.onCanceled = function () {
        this.cancelEvent.emit();
    };
    newNoteComponent.prototype.onNoteSubmit = function () {
        this.submitEvent.emit(this.modifiedNote);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], newNoteComponent.prototype, "cancelEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], newNoteComponent.prototype, "submitEvent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], newNoteComponent.prototype, "modifiedNote", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], newNoteComponent.prototype, "categories", void 0);
    newNoteComponent = __decorate([
        core_1.Component({
            selector: 'new-note',
            templateUrl: 'app/templates/newNoteForm.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], newNoteComponent);
    return newNoteComponent;
}());
exports.newNoteComponent = newNoteComponent;
//# sourceMappingURL=newNote.component.js.map