import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: DataService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  public signUp = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,10}')]],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    city: ['', Validators.required],
    age: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.registerUser(this.signUp.value).subscribe(data => {
      this._snackBar.open('User Registered Successfully', 'Close', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }

  get firstname() { return this.signUp.get('firstname') }
  get lastname() { return this.signUp.get('lastname') }
  get email() { return this.signUp.get('email') }
  get city() { return this.signUp.get('city') }
  get age() { return this.signUp.get('age') }
  get password() { return this.signUp.get('password') }

}
