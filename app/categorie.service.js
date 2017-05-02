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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
// Import RxJs required operator methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var CategorieService = (function () {
    function CategorieService(http) {
        this.http = http;
        this.catUrl = 'http://localhost/first_project/web/app_dev.php/note/api/categorie';
    }
    CategorieService.prototype.getCategories = function () {
        return this.http.get(this.catUrl)
            .map(function (res) { return res.json(); });
    };
    CategorieService.prototype.getCategorie = function (id) {
        return this.http.get(this.catUrl + "/" + id)
            .map(function (res) { return res.json(); });
    };
    CategorieService.prototype.createCategorie = function (cat) {
        return this.http.post(this.catUrl, this.serialize(cat));
    };
    CategorieService.prototype.updateCategorie = function (cat) {
        return this.http.put(this.catUrl + "/" + cat.id, this.serialize(cat));
    };
    CategorieService.prototype.deleteCategorie = function (cat) {
        return this.http.delete(this.catUrl + "/" + cat.id);
    };
    CategorieService.prototype.serialize = function (cat) {
        return JSON.stringify({
            'id': cat.id,
            'name': cat.name,
        });
    };
    CategorieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategorieService);
    return CategorieService;
}());
exports.CategorieService = CategorieService;
//# sourceMappingURL=categorie.service.js.map