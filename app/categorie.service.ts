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

    getCategories() : {
        return this.http.get(this.catUrl)
            .map((res:Response)) => res.json());
    }

    getCategorie(id : Number) : {
        return this.http.get(this.catUrl + "/" +id)
            .map((res:Response)) => res.json());
    }

    createCategorie(cat : Any) : {
        return this.http.post(this.catUrl, JSON.stringify(cat));
    }

    updateCategorie(cat : Any) : {
        return this.http.put(this.catUrl + "/" + cat.id, JSON.stringify(cat));
    }

    deleteCategorie(id : Number) : {
        return this.http.delete(this.catUrl + "/" + id)
            .map((res:Response)) => res.json());
    }
}
