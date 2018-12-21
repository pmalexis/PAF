import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PAF';

  public ngOnInit()
  {
 	$(window).on('load', function() {
		$('nav ul li:nth-child(3)').click(function(){
			$('nav').toggleClass('show');
		});
	});   
  }
}