import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../classes/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;

  constructor(private http: HttpClient, private router: Router) {
  }
}
