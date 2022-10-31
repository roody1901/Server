import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService) { }

  public email: string = ''
  public password: string = ''

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    this.service.loginUser({ email: loginForm.value.Email, password: loginForm.value.Password })
      .subscribe((data: any) => localStorage.setItem('token', data.access_token));
  }

}
