import { Component, OnInit } from '@angular/core';
import { CoiffuresService } from "../Services/coiffures.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coiffures',
  templateUrl: './coiffures.component.html',
  styleUrls: ['./coiffures.component.scss']
})
export class CoiffuresComponent implements OnInit {
  @Input() coiffures: coiffure[];
  coiffuresSubscription: Subscription;

  constructor(private coiffuresService: CoiffuresService) {
    coiffuresService.list().subscribe( coiffures => {
      this.coiffures = coiffures;
    });
  }

  ngOnInit() {
    this.coiffuresSubscription = this.coiffuresService.coiffures.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

}
