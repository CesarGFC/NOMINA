import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.page.html',
  styleUrls: ['./view-person.page.scss'],
})
export class ViewPersonPage implements OnInit {

  paysheet: any;

  constructor(private actroute: ActivatedRoute, private router: Router) { 
    this.actroute.queryParams.subscribe(
      params => {
        this.paysheet = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

}
