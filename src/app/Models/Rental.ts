

export interface Bike {
    id:string;
   regNumber: string ;
   brand: string ;
   model: string ;
   category: string ;
   bikeImage :string ;

}

export interface Rental {
    regNumber: any;
    id: number;
    moterbikeId :string;
    userId:string
    motorbike : any,
    rentDate : Date;
    approvalDate : Date;

  customer: string;
  brand: string;
  model: string;
  status: string;

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
    approvalDate : Date;
  }
  

