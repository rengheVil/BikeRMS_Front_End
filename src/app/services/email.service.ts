import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailTemplate } from '../Models/EmailTemplete';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  private mailURL ='https://localhost:7178/api/SendMail/Send-Mail';

  SendMAil(email: EmailTemplate): Observable<any> {
    console.log(email)
    return this.http.post(`${this.mailURL}`, email);
  }


}
