import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderGeneratorComponent } from '../order-generator/order-generator.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  isDialogOpen = false;
  orderList: any = [];
  
  constructor(
    private _dialog: MatDialog,
    private http: HttpClient,
    private spinner: NgxSpinnerService  ) { }

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
    this.spinner.show();
    const apiUrl = 'https://localhost:7157/api/Order/GetOrders';

    this.http.get(apiUrl).subscribe(
      response => {
        console.log('Response:', response);
        this.orderList = response;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.getOrders();
    console.log("Orders: ", this.orderList);
  }

}
