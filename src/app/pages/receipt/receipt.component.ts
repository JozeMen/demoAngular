import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ReceiptService} from "../../inner/services/receipt.service";
import {Receipt} from "../../inner/models/receipt";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit{
  allReceipts!: Receipt[];
  receipt!: Receipt;
  err: boolean = false;
  isEditable!: number;

  smth!:string;
  constructor(private router: Router, private receiptService: ReceiptService) {
  }

  onSelect(receipt: Receipt) {

  }
  ngOnInit(): void {
    this.receiptService.getAllReceipts().subscribe({
        next: (data) => {
          this.allReceipts = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }

  // editCommittee(oldname: string,value: string) {
  //   this.committeeService.editCommittee(oldname, value).subscribe({
  //   })
  // }
  // createCommittee(value: string) {
  //   this.committeeService.createCommittee(value).subscribe({
  //     next: (data) => {}
  //   })
  // }

  deleteReceipt(value: number) {
    this.receiptService.deleteReceipt(value).subscribe({
      next: (data) => {}
    })
  }
}
