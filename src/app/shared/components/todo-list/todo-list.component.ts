import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todosData : Array<Itodo> = []
  constructor(private _todoService: TodosService) {}

  ngOnInit(): void {
    this.todosData = this._todoService.fetchAllTodos()
  }

  removeOnClick(todo: Itodo){
    console.log(todo)

    // API call >> Instance of todoService will do
    this._todoService.removeTodo(todo)
  }
}
