

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