import { Component } from '@angular/core';
interface todoInterface{
  Addtask:string
  Addtime:string
  Addcategory:string
  Addday:string
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
public addtask = ""
public addtime = ""
public category = ""
public addday = ""

public userTodo:todoInterface[] = []

addTodo =()=>{
  // alert("working")
  let allTodo = {
    Addtask:this.addtask,
    Addtime:this.addtime,
    Addcategory:this.category,
    Addday:this.addday
  }

  this.userTodo.push(allTodo)
  console.log(this.userTodo);
  
}
}
