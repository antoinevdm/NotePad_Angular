import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategorieService {
    constructor (private http: Http) {}
    private catUrl = 'http://localhost/first_project/web/app_dev.php/note/api/categorie';

    getCategories() {
        return this.http.get(this.catUrl)
            .map((res:Response) => res.json());
    }

    getCategorie(id : Number) {
        return this.http.get(this.catUrl + "/" +id)
            .map((res:Response) => res.json());
    }

    createCategorie(cat : any) {
        return this.http.post(this.catUrl, this.serialize(cat));
    }

    updateCategorie(cat : any) {
        return this.http.put(this.catUrl + "/" + cat.id, this.serialize(cat));
    }

    deleteCategorie(cat : any) {
        return this.http.delete(this.catUrl + "/" + cat.id);
    }

    private serialize(cat: any) {
        return JSON.stringify({
            'id': cat.id,
            'name' : cat.name,
        });
    }
}
