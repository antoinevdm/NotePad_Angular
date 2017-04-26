import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {
    constructor (private http: Http) {}
    private notesUrl = 'http://localhost/first_project/web/app_dev.php/note/api/note';

    getNotes() : {
        return this.http.get(this.notesUrl)
            .map((res:Response)) => res.json());
    }

    getNote(id : Number) : {
        return this.http.get(this.notesUrl + "/" + id)
            .map((res:Response)) => res.json());
    }

    createNote(note : Any) : {
        return this.http.post(this.notesUrl, JSON.stringify(note));
    }

    updateNote(note : Any) : {
        return this.http.put(this.notesUrl + "/" +  note.id, JSON.stringify(note));
    }

    deleteNote(id : Number) : {
        return this.http.delete(this.notesUrl + "/" + id)
            .map((res:Response)) => res.json());
    }
}
