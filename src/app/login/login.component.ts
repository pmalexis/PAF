import * as $ from 'jquery';
import {Component, OnInit} from '@angular/core';
import {User} from '../classes/users';
import {UserService} from '../Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor
  (
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    $(window).on('load', function () {
      $('.form').find('input, textarea').on('keyup blur focus', function (e) {
        const $this = $(this),
          label = $this.prev('label');

        if (e.type === 'keyup') {
          if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
        } else if (e.type === 'blur') {
          if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.removeClass('highlight');
          }
        } else if (e.type === 'focus') {

          if ($this.val() === '') {
            label.removeClass('highlight');
          } else if ($this.val() !== '') {
            label.addClass('highlight');
          }
        }

      });

      $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        const target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

      });
    });
  }

  signUp() {
    if (this.user.firstName.length && this.user.lastName.length && this.user.email.length && this.user.password.length > 0) {
      this.userService.register(this.user).subscribe(result => {
        this.router.navigate(['coiffures']);
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  /*signIn() {
    if (this.user.email ===  && this.user.password ===  ) {
    } else {
      alert('Votre email et/ou mot de passe est incorrect.');
    }
  }*/
}
