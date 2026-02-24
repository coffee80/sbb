export interface Guest {
    id?:number;
    firstName:string;
    lastName:string;
    ssn:string;
    dob?:Date;
    address:string;
    city:string;
}

export interface Room {
    id?:number;
    name:string;
    description:string;
    basePrice:number;
}

export interface Booking{
    id?:number;
    guestId:number;
    roomId:number;
    from:Date;
    to:Date;
    notes:string;
}