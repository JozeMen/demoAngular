import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BodyModule} from "./apearance/body/body.module";
import { HeaderComponent } from './apearance/header/header.component';
import {HeaderModule} from "./apearance/header/header.module";
import { CommitteeComponent } from './pages/committee/committee.component';
import { PersonComponent } from './pages/person/person.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
