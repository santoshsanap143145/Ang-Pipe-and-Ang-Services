import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { TodosService } from '../../services/todos.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm!: NgForm;
  constructor(
    private _uuidService: UuidService,
    private _todoService: TodosService
  ) {}

  ngOnInit(): void {}

  addOnToDoClick() {
    if (this.todoForm.valid) {
      let newTodo: Itodo = this.todoForm.value;
      newTodo.todoId = this._uuidService.uuid();
      console.log(newTodo);
      this.todoForm.reset();

      // API call using todo Service Instance
      this._todoService.createNewTodo(newTodo)
    }
  }
}
