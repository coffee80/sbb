import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityInput } from "./city-input/city-input";
import { City } from './model/city';
import { GuestPreview } from "./guest-preview/guest-preview";
import { Guest } from './model/hotel.entities';
import { GuestSearch } from "./guest-search/guest-search";

@Component({
  selector: 'app-root',
  imports: [GuestSearch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
   guest: Guest = {
  id: 101,
  firstName: "Mario",
  lastName: "Rossi",
  ssn: "RSSMRA85A01H501Z",
  dob: new Date(1985, 0, 1), // 1 Gennaio 1985
  address: "Via delle Camelie, 12 - Interno 4",
  city: "Roma"
};

}
