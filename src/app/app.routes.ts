import { Routes } from '@angular/router';
import { TodayArrivals } from './today-arrivals/today-arrivals';
import { RefundCalculator } from './refund-calculator/refund-calculator';

export const routes: Routes = [
    { path: 'arrivals', component: TodayArrivals },
    { path: 'refund', component: RefundCalculator },
    
];
