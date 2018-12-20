import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoiffureService {
  coiffures: coiffure[];

  constructor(private http: HttpClient) {
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
}
