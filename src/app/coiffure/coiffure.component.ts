import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoiffureService} from "../Services/coiffure.service";

@Component({
  selector: 'app-coiffure',
  templateUrl: './coiffure.component.html',
  styleUrls: ['./coiffure.component.scss']
})
export class CoiffureComponent implements OnInit {
  coiffures: [];
  coiffure: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private coiffureService: CoiffureService,
  ) {
    this.coiffure = {};
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.coiffureService.showHaircut(params.id).subscribe(coiffure => {
        this.coiffure = coiffure;
      });
    });
  }

  delete(coiffure) {
    this.coiffureService.delete(coiffure.id).subscribe(result => {
      this.coiffureService.back();
    });
  }
}
