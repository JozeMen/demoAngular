import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {BodyComponent} from "./body.component";



@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})

export class BodyModule { }
