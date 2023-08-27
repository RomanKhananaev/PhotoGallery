import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order-generator.component.html',
  styleUrls: ['./order-generator.component.css']
})
export class OrderGeneratorComponent implements OnInit {
  minDate: Date;;

  constructor() {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  //this.minDate = new Date();
  

  ngOnInit(): void {
  }

}
