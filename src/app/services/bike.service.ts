import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Bike } from '../Models/Bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http : HttpClient) { }

  private apiUrl = 'https://localhost:7178/api/Motorbike';

    createbike(bike :Bike){
      return this.http.post("https://localhost:7178/api/Motorbike" , bike)
    }

    // Fetch all motorbikes
    getMotorbikes(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

    // Update a motorbike
    updateMotorbike(id: string, data: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }

    // Delete a motorbike
    deleteMotorbike(id: string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  
}

//customer available Motorbikes
// getMotorbikes(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

//customer my rentals
// getRentals(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

// getRentalRequests(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

// getOrderHistory(): Observable<any[]> {
//   return this.http.get<any[]>(this.apiUrl);
// }


