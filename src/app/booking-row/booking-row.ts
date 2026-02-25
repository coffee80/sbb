import { Component, inject, input, model } from '@angular/core';
import { Booking } from '../model/hotel.entities';
import { CommonModule } from '@angular/common';
import { BookingService } from '../booking-service';

/*
    Questo componente riceve un booking come input
    e lo grafica
    Questo in java sarebbe stato
    viewBooking.render(booking)
*/
@Component({
  selector: 'app-booking-row',
  imports: [CommonModule],
  templateUrl: './booking-row.html',
  styleUrl: './booking-row.css',
})
export class BookingRow {

    // ricevo un dato da graficare, come se fosse un parametro
    // come fosse Antani

    
    booking = model.required<Booking>();

    bookingService = inject(BookingService);

    doCheckIn():void{

        let id:number = this.booking().id ?? 0;

        this.bookingService.doCheckIn(id).subscribe(
        {
            next:()=> {
                this.booking.update(old=>{return {...old, status:"executed"}})
            },
            error:err=>console.log(err)
        });        
    }


}
