import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.page.html',
  styleUrls: ['./edit-person.page.scss'],
})
export class EditPersonPage implements OnInit {

  public event = {
    month: '1990-02-19'
  };

  constructor() { }

  ngOnInit() {
  }

}
