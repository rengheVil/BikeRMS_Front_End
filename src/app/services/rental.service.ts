import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { Rental, RentalRequest } from '../Models/Rental';


@Injectable({
  providedIn: 'root'
})

export class RentalService {

  constructor(private http : HttpClient) { }

  private apiUrl =     'https://localhost:7178/api/Motorbike';
  private apiUrlCus =  'https://localhost:7178/api/User';
  private apirequest =     'https://localhost:7178/api/RentalRequest';
  private apirental =  'https://localhost:7178/api/Rental';
  
  private approveUrl = 'https://localhost:7178/api/RentalRequest/Approvals';       
  private apireturn  = 'https://localhost:7178/api/Rental/return/';
  private apiHistory = 'https://localhost:7178/api/OrderHistory';

  private userLogin ='https://localhost:7178/api/UserAccount/Log-In';
private userRegister='https://localhost:7178/api/UserAccount/Register-User'
    // register 
    register(user: User): Observable<any> {
      console.log(user)
      return this.http.post(`${this.userRegister}`, user);
    }

    // Login
    login(credentials: any): Observable<any> {
      return this.http.post(`${this.userLogin}`, credentials);
    }

    getCustomers(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrlCus);
    }

       // Update a Customer
       updateCustomer(id: string, data: any): Observable<any> {
        return this.http.put(`${this.apiUrlCus}/${id}`, data);
      }
  
      // Delete a Customer
      deleteCustomer(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrlCus}/${id}`);
      }

   // Get all rentals
    getRentals(userId: number): Observable<any[]> {
      console.log("userid"+userId);
     // 'https://localhost:7178/api/RentalRequest/Approvals/1003'
      return this.http.get<any>(`${this.approveUrl}/${userId}`);
    }
    getAllRentalRecords(){
      return this.http.get<Rental[]>("https://localhost:7178/api/Rental");
    }

    getRentalRequests(): Observable<RentalRequest[]> {
      return this.http.get<RentalRequest[]>(this.apirequest);
    }
    getRequestById(id : number){
      return this.http.get<any>("https://localhost:7178/api/RentalRequest/" + id)
    }



     // get customer History
     getOrderHistoryByUserId(userId: number): Observable<any> {
      return this.http.get<any[]>(`https://localhost:7178/api/OrderHistory/user/${userId}`);
    }

    //////

    getUserApprovals(userId: number): Observable<any[]> {
      return this.http.get<any[]>(`${this.apirequest}/Approvals/${userId}`);
    }



    // getRentalRequests(): Observable<any> {
    //   return this.http.get(this.apirequest);
    // }https://localhost:7178/api/RentalRequest/12/status
  
    //manager rentalRequests Approved
    updateRequestStatus(requestId: number): Observable<any> {
      return this.http.get(`${this.apirequest}/${requestId}/update`);
    }

    requestRental(motorbikeId: number, userId: number, requestDate:Date): Observable<any> {
      return this.http.post(`${this.apirequest}`, {
        MotorbikeId: motorbikeId,
        UserId: userId,
        RequestDate: requestDate

      });
    }

    /////// return rental 
    returnRental(rentalId: number): Observable<any> {
      return this.http.get(this.apireturn+rentalId);
    }
    


    /// overdue rentals
    // getStatusClass(userId: string): Observable<any[]> {
    //   return this.http.get<any[]>(`${this.apiUrl}/overdue?userId=${userId}`);
    // }

    //man order history
    getOrderHistory(): Observable<any> {
      return this.http.get(this.apiHistory);
    }

    // email Send
    sendEmail(emailData: any): Observable<any> {
      return this.http.post(`https://localhost:7178/api/SendMail/Send-Mail`, emailData);
    }
//get all users
    getAllUserList():Observable<number>{
      return this.http.get<number>("https://localhost:7178/api/User/count");
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






