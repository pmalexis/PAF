import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoiffureService {
  coiffure: [];

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get("http://localhost:3000/coiffures/");
  }

  get(id) {
    return this.http.get("http://localhost:3000/coiffures/" + id);
  }
}
