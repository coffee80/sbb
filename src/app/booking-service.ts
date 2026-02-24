import { Injectable, signal, computed } from '@angular/core';
import { Booking } from './model/hotel.entities';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // Stato iniziale: lista vuota
  private _bookings = signal<Booking[]>([]);
  
  // Segnali pubblici
  bookings = computed(() => this._bookings());
  totalBookings = computed(() => this._bookings().length);

  constructor() {
    // Non chiamiamo alcun generatore di mock, partiamo da zero.
  }

  /**
   * CREATE: Aggiunge una nuova prenotazione
   */
  addBooking(newBooking: Booking) {
    const nextId = this._bookings().length > 0 
      ? Math.max(...this._bookings().map(b => b.id ?? 0)) + 1 
      : 1;
      
    const bookingWithId = { ...newBooking, id: nextId };
    
    this._bookings.update(current => [...current, bookingWithId]);
    console.log('Prenotazione registrata:', bookingWithId);
  }

  /**
   * READ: Recupera tutte le prenotazioni
   */
  fetchAll(): Booking[] {
    return this._bookings();
  }

  /**
   * UPDATE: Modifica una prenotazione esistente (es. cambio date o stanza)
   */
  updateBooking(updatedBooking: Booking) {
    if (!updatedBooking.id) return;
    
    this._bookings.update(current => 
      current.map(b => b.id === updatedBooking.id ? { ...updatedBooking } : b)
    );
  }

  /**
   * DELETE: Cancella una prenotazione
   */
  deleteBooking(id: number) {
    this._bookings.update(current => current.filter(b => b.id !== id));
  }

  /**
   * Metodo di utilità: Filtra le prenotazioni per un determinato Guest
   */
  getBookingsByGuest(guestId: number) {
    return computed(() => this._bookings().filter(b => b.guestId === guestId));
  }

  /**
   * Metodo di utilità: Filtra le prenotazioni per una determinata Stanza
   */
  getBookingsByRoom(roomId: number) {
    return computed(() => this._bookings().filter(b => b.roomId === roomId));
  }
}