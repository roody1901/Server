import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private service: DataService) { }
  todos: Array<Todo> = [];
  ngOnInit(): void {
    this.service.getTodos().subscribe(data => this.todos = data)
  }

}
