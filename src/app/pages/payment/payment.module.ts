import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PaymentComponent} from "./payment.component";
import {PaymentService} from "../../inner/services/payment.service";



@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PaymentComponent
      },
    ]),
    FormsModule
  ],
  providers: [PaymentService]
})
export class PaymentModule { }
