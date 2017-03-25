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
var AppComponent = (function () {
    function AppComponent() {
        this.notes = [{
                "title": "première note",
                "content": "test",
                "date": "22/03",
                "id": 1,
                "categorie": {
                    "id": 1,
                    "name": "remarque"
                }
            }, {
                "title": "Seconde note",
                "content": "test numéro 2",
                "date": "22/04",
                "id": 2,
                "categorie": {
                    "id": 2,
                    "name": "to do"
                }
            }
        ];
    }
    AppComponent.prototype.newNote = function (evt) {
        console.log(evt);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: '<new-note></new-note>',
            templateUrl: 'app/templates/main.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map