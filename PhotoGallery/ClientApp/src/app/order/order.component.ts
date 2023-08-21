import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderGeneratorComponent } from '../order-generator/order-generator.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  fullName!: string;
  phoneNumber!: string;

  constructor(public _dialog: MatDialog) { }

  createNewOrder() {
    console.log("createNewOrder");
    const dialogRef = this._dialog.open(OrderGeneratorComponent, {
      width: '250px',
      data: { fullName: this.fullName, phoneNumber: this.phoneNumber },
    }
    )
  };


  ngOnInit(): void {
  }

}
