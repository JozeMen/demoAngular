import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommitteeComponent} from "../committee/committee.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommitteeService} from "../../inner/services/committee.service";
import {CompanyComponent} from "./company.component";
import {CompanyService} from "../../inner/services/company.service";



@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyComponent
      },
    ]),
    FormsModule
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
