import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order-generator.component.html',
  styleUrls: ['./order-generator.component.css']
})
export class OrderGeneratorComponent implements OnInit {
  minDate: Date;

  orderForm = {
    firstName: "שלי",
    lastName: "סלומון",
    phoneNumber: "0567765432",
    invitedAmount: 0,
    eventDate: new Date(2025, 5, 15),
    imagePath: "../../assets/images/P4.jpg"
  }

  constructor(private http: HttpClient) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  SendOrder() {
    console.log(this.orderForm);
    const now = new Date();
    this.orderForm.eventDate = new Date(this.orderForm.eventDate.getTime() - (now.getTimezoneOffset() * 60000));
    const apiUrl = 'https://localhost:7157/api/Order/SetOrders';
    this.http.post(apiUrl, this.orderForm).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
