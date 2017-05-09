import { Component } from '@angular/core';

@Component({
    selector : 'about',
    template : `
    <ion-header>
      <ion-navbar>
        <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>About</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-card>
            <ion-card-header>
            </ion-card-header>
            <ion-card-content>
                This is a angular It engineer project extended for smartphone
                with Ionic.
                <br>
                <br>
                Working with a symfony API, used to show notes,
                edit/delete them or edit a new one.
                <br>
                Each note have a "category" chosen from those
                available with the synfony API or one you created.
                <br>
                <br>
                Finaly you can search tagged word inside notes. (On symfony
                version only)
            </ion-card-content>
        </ion-card>
    </ion-content>
    `
})

export class aboutComponent {
}
