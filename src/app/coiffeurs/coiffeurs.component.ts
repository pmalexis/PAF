import { Component, OnInit } from '@angular/core';
import {CoiffeursService} from '../Services/coiffeurs.service';

@Component({
  selector: 'app-coiffeurs',
  templateUrl: './coiffeurs.component.html',
  styleUrls: ['./coiffeurs.component.scss']
})
export class CoiffeursComponent implements OnInit {
  coiffures: any;

  constructor(private coiffeursService: CoiffeursService) {
    this.coiffeursService.listCoiffeurs().subscribe(coiffures => {
      this.coiffures = coiffures;
      console.log(this.coiffures.coiffeurName);
    });
  }

  ngOnInit() {
  }

}
