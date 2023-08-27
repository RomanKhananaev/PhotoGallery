import { HttpClient } from '@angular/common/http';
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
  orderList: any = [];
  isLoading = false;
  
  constructor(
    private _dialog: MatDialog,
    private http: HttpClient) { }

  createNewOrder() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogRef = this._dialog.open(OrderGeneratorComponent);

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false; // Reset the flag when the dialog is closed
      });
    }
  }

  getOrders() {
    this.isLoading = true;
    const apiUrl = 'https://localhost:7157/api/Order/GetOrders';

    this.http.get(apiUrl).subscribe(
      response => {
        console.log('Response:', response);
        this.orderList = response;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getOrders();
    console.log("Orders: ", this.orderList);
  }

}
