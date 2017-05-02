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
var categorie_service_1 = require('./categorie.service');
var categoriesComponent = (function () {
    function categoriesComponent(categorieService) {
        this.categorieService = categorieService;
        this.display = false;
        this.selectedCat = 0;
        this.catToModify = null;
        this.emptyCat = [{
                "id": 0,
                "name": ""
            }];
    }
    categoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorieService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); }, function (err) { return console.log(err); }, function () { return console.log('categories charged'); });
    };
    categoriesComponent.prototype.onSubmitEvent = function (cat) {
        this.display = false;
        if (this.selectedCat == 0) {
            this.categories.push(cat);
            this.categorieService.createCategorie(cat).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('categorie added'); });
        }
        else {
            this.categorieService.updateCategorie(cat).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('categorie updated'); });
        }
    };
    categoriesComponent.prototype.deleteCat = function (cat) {
        this.categorieService.deleteCategorie(cat).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('categorie deleted'); });
        var index = this.categories.findIndex(function (n) { return (n === cat); });
        if (index != -1) {
            this.categories.splice(index, 1);
        }
    };
    categoriesComponent.prototype.modifyCat = function (cat) {
        if (this.display == true && this.selectedCat == cat.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCat != cat.id) {
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
        else {
            this.display = !this.display;
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
    };
    categoriesComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: 'app/templates/categories.component.html',
            providers: [categorie_service_1.CategorieService],
        }), 
        __metadata('design:paramtypes', [categorie_service_1.CategorieService])
    ], categoriesComponent);
    return categoriesComponent;
}());
exports.categoriesComponent = categoriesComponent;
//# sourceMappingURL=categories.component.js.map