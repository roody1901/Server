import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  firstname: string = 'Dhiraj';
  person: any = {
    fname: 'Peter',
    lname: 'Parker',
    email: 'Peter@gmail.com',
    city: 'New Delhi'
  }

  ngOnInit(): void {
  }

}
