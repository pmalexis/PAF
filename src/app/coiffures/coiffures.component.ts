import {Component, Input, OnInit} from '@angular/core';
import {CoiffureService} from '../Services/coiffure.service';

@Component({
  selector: 'app-coiffures',
  templateUrl: './coiffures.component.html',
  styleUrls: ['./coiffures.component.scss']
})
export class CoiffuresComponent implements OnInit {
  coiffures: any;
  @Input() searchName: string;

  constructor(private coiffureService: CoiffureService) {
    this.coiffureService.list().subscribe(coiffures => {
      this.coiffures = coiffures;
      console.log(this.coiffures);
    });
  }

  ngOnInit() {
  }
}
