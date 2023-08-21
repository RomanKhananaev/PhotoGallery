import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  loginForm: any = {
    email: 'elad@gmail.com',
    password: '123345'
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ChangeMode() {
    this.isRegister = !this.isRegister;
  }
  printForm() {
    console.log("Register form: ", this.registerForm);
  }
  registerUser() {
    const apiUrl = 'https://localhost:7157/api/User/Register';

    this.http.post(apiUrl, this.registerForm).subscribe(
      response => {
        console.log('User registered:', response);
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
  loginUser() {
    const apiUrl = 'https://localhost:7157/api/User/Login';
    this.http.post(apiUrl, this.loginForm).subscribe(
      response => {
        console.log('User login:', response);
      },
      error => {
        console.error('Error login user:', error);
      }
    );
  }
}
