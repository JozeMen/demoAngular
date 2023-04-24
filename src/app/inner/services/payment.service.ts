import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Payment} from "../models/payment";

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient, private router: Router) { }
  private paymentUrl = 'http://localhost:8081/api/payment';

  public getAllPayments() {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

  // editCommittee(name: string, newName: string) {
  //   return this.http.put(this.paymentUrl + "/" + name , {
  //     newName
  //   })
  // }
  // createCommittee(name: string) {
  //   return this.http.post<Committee>(this.paymentUrl, {
  //     name
  //   })
  // }

  deleteCommittee(id: number) {
    return this.http.delete<Payment>(this.paymentUrl  + "/" + id )
  }
}
