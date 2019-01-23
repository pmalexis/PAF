import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coiffure} from "../classes/coiffures";
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CoiffureService {
  coiffures: Array<Coiffure>;

  constructor(private http: HttpClient, private router: Router) {
  }

  list() {
    return this.http.get("http://localhost:3000/coiffures/");
  }

  showHaircut(id) {
    return this.http.get("http://localhost:3000/coiffures/" + id);
  }

  create(datas) {
    return this.http.post("http://localhost:3000/coiffures", datas)
  }

  delete(id) {
    return this.http.delete("http://localhost:3000/coiffures/" + id);
  }

  back() {
    this.router.navigate(['coiffures']);
  }
}
