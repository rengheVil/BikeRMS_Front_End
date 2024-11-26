

export interface Bike {
    id:string;
   regNumber: string ;
   brand: string ;
   model: string ;
   category: string ;
   bikeImage :string ;

}

export interface Rental {
    id: string;
    moterbikeId :string;
    userId:string
   
}

export interface RentalRequest {
motorbike: any;
    id: number;
    customer: string;
    regNumber: string;
    brand: string;
    model: string;
    requestDate: string;
    category:string;
    status: string;
  }
  