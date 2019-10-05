import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";
@Component({
  selector: "todo-app",
  templateUrl: "app.component.html",
  
})
export class AppComponent {
  model = new Model();
  getName(){
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem, priority, data){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem, false, priority, data));
    }
    this.model.items.sort((a: TodoItem, b: TodoItem) => {
       return +new Date(a.data) - +new Date(b.data);
    })
  }
getAltapriority(){
    if(this.model.items.priority.equals("Alta")){
      return this.model.items.priority;
    }
  }
  getTodoItemsconcluidos(){
    return this.model.items.filter(item => item.done);
    }
  
}
 
