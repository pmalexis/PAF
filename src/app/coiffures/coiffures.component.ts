import { Component, OnInit } from '@angular/core';
import { CoiffureService} from "../Services/coiffure.service";

@Component({
  selector: 'app-coiffures',
  templateUrl: './coiffures.component.html',
  styleUrls: ['./coiffures.component.scss']
})
export class CoiffuresComponent implements OnInit {
  private coiffures: any;

  constructor(private coiffureService: CoiffureService) {
    this.coiffures = [];
  }

  ngOnInit() {
    this.coiffureService.list().subscribe(coiffure => {
      this.coiffures = coiffure;
      console.log(this.coiffures);
    });
  }

}
