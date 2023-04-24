import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommitteeComponent} from "./committee.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommitteeService} from "../../inner/services/committee.service";



@NgModule({
  declarations: [CommitteeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CommitteeComponent
      },
    ]),
    FormsModule
  ],
  providers: [CommitteeService]
})
export class CommitteeModule { }
