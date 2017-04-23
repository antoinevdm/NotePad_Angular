import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'about',
    template : `
    <div class="well well-lg">
        <div class="row">
            This is a angular It engineer project.
            <br>
            <br>
            Working with a synfoony API, used to show notes,
            edit them or edit a new one.
            <br>
            Each note have a "category" chosen from those
            available with the synfony API or one you created.
            <br>
            <br>
            Finaly you can search tagged word inside notes.
        </div>
    </div>
    `
})

export class aboutComponent {
}
