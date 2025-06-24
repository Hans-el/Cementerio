import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  people = [
    {
      name: '',
      birthDate: '',
      deathDate: '',
      additionalInfo: ''
    },
    {
      name: '',
      birthDate: '',
      deathDate: '',
      additionalInfo: ''
    },
    {
      name: '',
      birthDate: '',
      deathDate: '',
      additionalInfo: ''
    },
    {
      name: '',
      birthDate: '',
      deathDate: '',
      additionalInfo: ''
    }


    // Añade más personas según sea necesario
  ];
}