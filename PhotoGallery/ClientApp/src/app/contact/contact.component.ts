import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // Process checkout data here
    console.log("onSubmit clicked..", this.checkoutForm);
  }

}
