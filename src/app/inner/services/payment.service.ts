import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Payment} from "../models/payment";

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient, private router: Router) { }
  private paymentUrl = 'http://localhost:8081/api/payment';

  public getAllPayments() {
    return this.http.get<Payment[]>(this.paymentUrl);
  }
  createPayment(receiptId: number, payerId: number) {
    return this.http.post<Payment>(this.paymentUrl + `/${receiptId}/${payerId}` , {},{
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',

        })
      });
  }

  deletePayment(id: number) {
    return this.http.delete<Payment>(this.paymentUrl  + "/" + id )
  }
}
