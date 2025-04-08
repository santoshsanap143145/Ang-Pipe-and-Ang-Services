import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoArr: Array<Itodo> = [
    {
      todoItem: 'HTML',
      todoId: '101',
    },
    {
      todoItem: 'CSS',
      todoId: '102',
    },
    {
      todoItem: 'JS',
      todoId: '103',
    },
    {
      todoItem: 'SASS',
      todoId: '104',
    },
  ];

  constructor(private _snackBar : SnackbarService) {}


  fetchAllTodos(): Array<Itodo>{
    return this.todoArr
  }

  createNewTodo(todo: Itodo){
    this.todoArr.push(todo)
    console.log(this.todoArr)

    this._snackBar.openSnackBar(`New Todo Item ${todo.todoItem} added successfully !!!`)
    
  }

  removeTodo(todoObj : Itodo){
    let objIndex = this.todoArr.findIndex(todo => todo.todoId === todoObj.todoId)
    this.todoArr.splice(objIndex, 1)

    this._snackBar.openSnackBar(`New Todo Item ${todoObj.todoItem} added successfully !!!`)
    // we can also pass obj as parameter instead of id when we want to add confirmation alert that ' todo is removedd successfully!!!' 
  }
}
