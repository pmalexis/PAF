import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Coiffure} from '../classes/coiffures';


@Injectable({
  providedIn: 'root'
})
export class CoiffeursService {
  coiffures: Array<Coiffure>;

  constructor(private http: HttpClient, private router: Router) { }

  listCoiffeurs() {
    return this.http.get('http://localhost:3000/coiffures/');
  }
}

