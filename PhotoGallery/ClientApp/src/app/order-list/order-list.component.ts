import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderGeneratorComponent } from '../order-generator/order-generator.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  isDialogOpen = false;
  orderList: any = [
    { name: "Elad Mor", phoneNumber: "0548138620", guestsAmount: 200, date: "04-07-2022", image: "../../assets/images/P1.jpg" },
    { name: "Roman Khananaev", phoneNumber: "0548138681", guestsAmount: 600, date: "14-07-2024", image: "../../assets/images/P2.jpg" },
    { name: "Meital Mor", phoneNumber: "0508653274", guestsAmount: 360, date: "04-08-2023", image: "../../assets/images/P3.jpg" }
  ];
  
  constructor(private _dialog: MatDialog) { }

  createNewOrder() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogRef = this._dialog.open(OrderGeneratorComponent);

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false; // Reset the flag when the dialog is closed
      });
    }
  }

  ngOnInit(): void {
    console.log("Orders: ", this.orderList);
  }

}
