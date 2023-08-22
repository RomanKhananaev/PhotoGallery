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
  public isDialogOpen = false;

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
  }

}
