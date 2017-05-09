import { NavController, NavParams } from 'ionic-angular';

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
    selector : 'categories',
    templateUrl : 'app/templates/categories.component.html',
    providers: [CategorieService],
})

export class categoriesComponent {
    display: boolean = false;
    selectedCat: number = 0;
    catToModify: any = null;

    categories : any[];

    constructor(private categorieService : CategorieService) { }

    emptyCat = [{
        "id" : 0,
        "name" : ""
    }]

    ngOnInit() {
        this.categorieService.getCategories().subscribe(
            data => { this.categories = JSON.parse(data); },
            err => console.log(err),
            () => console.log('categories charged')
        );
    }

    onSubmitEvent(cat: any) {
        this.display = false;
        if (this.selectedCat == 0) {
            this.categories.push(cat);
            this.categorieService.createCategorie(cat).subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('categorie added')
            );
        } else {
            this.categorieService.updateCategorie(cat).subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('categorie updated')
            );
        }
    }

    deleteCat(cat : any) {
        this.categorieService.deleteCategorie(cat).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('categorie deleted')
        );

        let index = this.categories.findIndex((n) => (n === cat));
        if (index != -1) {
           this.categories.splice(index, 1);
        }
    }

    modifyCat(cat : any) {
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
    }
}
