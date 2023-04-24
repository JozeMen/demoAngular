import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'committee',
      loadChildren: () =>
        import('./pages/committee/committee.module').then((m) => m.CommitteeModule),
    },
    {
      path: 'person',
      loadChildren: () =>
        import('./pages/person/person.module').then((m) => m.PersonModule),
    },
    {
      path: 'payment',
      loadChildren: () =>
        import('./pages/payment/payment.module').then((m) => m.PaymentModule),
    },
    {
      path: 'receipt',
      loadChildren: () =>
        import('./pages/receipt/receipt.module').then((m) => m.ReceiptModule),
    },
    // {
    //   path: 'operation',
    //   loadChildren: () =>
    //     import('./pages/operation/operation.module').then((m) => m.OperationModule),
    // },
  ],
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


