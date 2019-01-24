import {Component, Input, OnInit} from '@angular/core';
import {CoiffureService} from '../Services/coiffure.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    coiffures: any;
    @Input() searchName: string;

    constructor(private coiffureService: CoiffureService) {
        this.coiffureService.list().subscribe(coiffures => {
            this.coiffures = coiffures;
            console.log(this.coiffures);
        });
    }
}
