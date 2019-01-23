import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
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
}
