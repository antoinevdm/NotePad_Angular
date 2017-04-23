import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'categories',
    templateUrl : 'app/templates/categories.component.html',
})

export class categoriesComponent {
    display: boolean = false;
    selectedCat: number = 0;
    catToModidy: any = null;

    emptyCat = [{
        "id" : 0,
        "name" : ""
    }]

    categories = [{
        "id" : 1,
        "name" : "remarque"
    }, {
        "id" : 2,
        "name" : "todo"
    }, {
        "id" : 3,
        "name" : "nePasOublier"
    }, {
        "id" : 4,
        "name" : "autre"
    }]

    deleteCat(cat : any) {
        // TODO: delete category in databe using API
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
