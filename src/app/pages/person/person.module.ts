import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommitteeComponent} from "../committee/committee.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommitteeService} from "../../inner/services/committee.service";
import {PersonComponent} from "./person.component";
import {PersonService} from "../../inner/services/person.service";



@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonComponent
      },
    ]),
    FormsModule
  ],
  providers: [PersonService, CommitteeService]
})
export class PersonModule { }
