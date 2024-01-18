import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housingLocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly baseURL = '/workspaces/angular-101/first-app/src';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: this.baseURL + `/assets/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }

}