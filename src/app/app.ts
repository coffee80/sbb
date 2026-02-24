import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityInput } from "./city-input/city-input";
import { City } from './model/city';
import { GuestPreview } from "./guest-preview/guest-preview";
import { Guest } from './model/hotel.entities';
import { GuestSearch } from "./guest-search/guest-search";
import { RefundCalculator } from "./refund-calculator/refund-calculator";

@Component({
  selector: 'app-root',
  imports: [RefundCalculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
    bornIn = signal<City | null>(null);
    diedIn = signal<City | null>(null);

}
