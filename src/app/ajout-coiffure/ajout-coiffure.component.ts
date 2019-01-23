import {Component, OnInit} from '@angular/core';
import {CoiffureService} from '../Services/coiffure.service';
import {Coiffure} from '../classes/coiffures';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ajout-coiffure',
  templateUrl: './ajout-coiffure.component.html',
  styleUrls: ['./ajout-coiffure.component.scss']
})
export class AjoutCoiffureComponent implements OnInit {

  coiffure: Coiffure;

  constructor(
    private coiffureService: CoiffureService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.coiffure = new Coiffure();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.coiffureService.showHaircut(param.id).subscribe( (coiffure: Coiffure) => {
        this.coiffure = coiffure;
      });
    });
  }

  addHaircut() {
    this.coiffureService.create(this.coiffure).subscribe(result => {
      this.coiffureService.back();
    });
  }
}
