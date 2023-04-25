import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReceiptComponent} from "./receipt.component";
import {ReceiptService} from "../../inner/services/receipt.service";



@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReceiptComponent
      },
    ]),
    FormsModule
  ],
  providers: [ReceiptService]
})
export class ReceiptModule { }
