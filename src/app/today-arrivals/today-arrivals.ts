import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { BookingService } from '../booking-service';
import { Booking } from '../model/hotel.entities';
import { UserService } from '../user-service';

@Component({
  selector: 'app-today-arrivals',
  imports: [CommonModule],
  templateUrl: './today-arrivals.html',
  styleUrl: './today-arrivals.css',
})
export class TodayArrivals {

    private bookingService = inject(BookingService);
    private userService = inject(UserService);
    loggedUser = this.userService.loggedUser;

    bookings = signal<Booking[]>([]);


    constructor(){
        effect(() => {
            const user = this.loggedUser();
            
            // Se l'utente c'è e ha un hotel ID, allora faccio la chiamata
            if (user && user.hotel?.id) {
                console.log("Caricamento per hotel:", user.hotel.id);
                
                this.bookingService.getTodaysArrivals(user.hotel.id).subscribe({
                    next: (json) => this.bookings.set(json),
                    error: (err) => console.error(err)
                });
            }
        });
    }

}
