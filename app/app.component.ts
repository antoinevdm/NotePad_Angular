import { Component } from '@angular/core';
//http://stackoverflow.com/questions/37252146/angular-2-redirect-on-click
import { Router } from '@angular/router';

@Component({
  selector: 'my-app', //selector "my-app" can be used as a html tag now
  //template: '<new-note></new-note>',
  templateUrl : 'app/templates/main.html',
})

export class AppComponent  {
    notes = [{
        "title" : "première note",
        "content" : "test",
        "date" : "22/03",
        "id" : 1,
        "categorie" : {
            "id" : 1,
            "name" : "remarque"
        }
    }, {
        "title" : "Seconde note",
        "content" : "test numéro 2",
        "date" : "22/04",
        "id" : 2,
        "categorie" : {
            "id" : 2,
            "name" : "to do"
        }
    }
    ]

    newNote(evt:any) {
        console.log(evt);
    }
}
