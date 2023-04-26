import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Committee} from "../../inner/models/committee";
import {Payment} from "../../inner/models/payment";
import {PaymentService} from "../../inner/services/payment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  allPayments!: Payment[];
  payment!: Payment;
  err: boolean = false;
  isEditable!: number;

  paymentId!: number;
  newpayerId!: number;
  newreceiptId!: number;

  constructor(private router: Router, private paymentService: PaymentService) {
  }

  onSelect(payment: Payment) {

  }
  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe({
        next: (data) => {
          this.allPayments = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }

  // editPerson(oldname: string,value: string) {
  //   this.paymentService.editPerson(oldname, value).subscribe({
  //   })
  // }
  createPayment(value: number, value1: number ) {
    this.paymentService.createPayment(value, value1).subscribe({
      next: (data) => {}
    })
  }

  deletePayment(value: number) {
    this.paymentService.deleteCommittee(value).subscribe({
      next: (data) => {}
    })
  }
}
