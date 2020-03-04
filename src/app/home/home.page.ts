import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  paysheets: any = [{
    rfc: 'JUJU123456532',
    password: 1234,
    name: {
      firstName: 'Juan',
      lastName: 'Perez',
      fullName: 'Juan Perez'
    },
    salary: 50000,
    type: 'Base',
    active: true,
    email: 'je@hotmail.com',
    initialDate: '1992/12/12'
  },
  {
    rfc: 'AN123LO123',
    password: 4321,
    name: {
      firstName: 'Joy',
      lastName: 'Gonzalez',
      fullName: 'Joy Gonzalez'
    },
    salary: 100000,
    type: 'Confianza',
    active: false,
    email: 'jG@hotmail.com',
    initialDate: '1995/12/12'
  },
  {
    rfc: '12345689llkj',
    password: 3333,
    name: {
      firstName: 'Anaí',
      lastName: 'Gonzalez',
      fullName: 'Anaí Gonzalez'
    },
    salary: 1000,
    type: 'Confianza',
    active: true,
    email: 'ag@hotmail.com',
    initialDate: '1995/12/12'
  },
  {
    rfc: 'LAQA971222HNT',
    password: 123,
    name: {
      firstName: 'Arturo',
      lastName: 'Larios',
      fullName: 'Arturo Larios'
    },
    salary: 1000,
    type: 'Confianza',
    active: false,
    email: 'ak@hotmail.com',
    initialDate: '1995/12/12'
  }
];

  constructor(private router: Router) {}

  view(paysheet: any): void 
  {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(paysheet)
      }
    };

    this.router.navigate(['/view-person'], extras);
  }

  edit()
  {
    this.router.navigate(['/edit-person']);
  }
}
