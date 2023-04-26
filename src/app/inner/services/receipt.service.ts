import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Receipt} from "../models/receipt";

@Injectable()
export class ReceiptService {
  constructor(private http: HttpClient, private router: Router) { }
  private receiptUrl = 'http://localhost:8081/api/receipt';

  public getAllReceipts() {
    return this.http.get<Receipt[]>(this.receiptUrl);
  }

  // editCommittee(name: string, newName: string) {
  //   return this.http.put(this.receiptUrl + "/" + name , {
  //     newName
  //   })
  // }
  createReceipt( writemDate: Date, sumOfMoney: number) {
    return this.http.post<Receipt>(this.receiptUrl, {
      writemDate,
      sumOfMoney
    },
      {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*"

        })
      }
    );
  }
  deleteReceipt(id: number) {
    return this.http.delete<Receipt>(this.receiptUrl  + "/" + id )
  }
  // editReceipt(writemDate: Date, sumOfMoney: number)
}
