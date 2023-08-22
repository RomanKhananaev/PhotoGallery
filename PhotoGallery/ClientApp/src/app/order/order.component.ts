import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderGeneratorComponent } from '../order-generator/order-generator.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  //fullName!: string;
  //phoneNumber!: string;

  constructor(private _dialog: MatDialog) { }

  createNewOrder() {
    console.log("createNewOrder");
    const dialogRef = this._dialog.open(OrderGeneratorComponent);
  }


  ngOnInit(): void {
  }

}
