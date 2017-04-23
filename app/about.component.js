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
var aboutComponent = (function () {
    function aboutComponent() {
    }
    aboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: "\n    <div class=\"well well-lg\">\n        <div class=\"row\">\n            This is a angular It engineer project.\n            <br>\n            <br>\n            Working with a synfoony API, used to show notes,\n            edit them or edit a new one.\n            <br>\n            Each note have a \"category\" chosen from those\n            available with the synfony API or one you created.\n            <br>\n            <br>\n            Finaly you can search tagged word inside notes.\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], aboutComponent);
    return aboutComponent;
}());
exports.aboutComponent = aboutComponent;
//# sourceMappingURL=about.component.js.map