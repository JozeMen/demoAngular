import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
  // createCommittee(name: string) {
  //   return this.http.post<Committee>(this.receiptUrl, {
  //     name
  //   })
  // }

  deleteReceipt(id: number) {
    return this.http.delete<Receipt>(this.receiptUrl  + "/" + id )
  }
}