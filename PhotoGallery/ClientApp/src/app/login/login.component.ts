import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRegister: boolean = true;
  registerForm: any = {
    fullName: 'elad',
    email: 'elad@gmail.com',
    password: '123345',
    phoneNumber: '0548138620' 
  }
  constructor() { }

  ngOnInit(): void {
  }

  ChangeMode() {
    this.isRegister = !this.isRegister;
  }
  printForm() {
    console.log("Register form: ", this.registerForm);
  }
}
