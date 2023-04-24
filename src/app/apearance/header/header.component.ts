import {Component, OnInit} from '@angular/core';
import {menuData} from "./menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {
  }

  navDate = menuData;
}
