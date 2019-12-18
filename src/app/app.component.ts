import { Component } from "@angular/core";
import{Model,TodoItem} from "./model";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
@Component({
 selector: "todo-app",
 templateUrl: "app.component.html",
})
export class AppComponent  {
  model=new Model();
   getTodoItems() {
     return this.model.itens.filter(item => !item.done);
   }
   getTodoItemsConcluidas() {
     return this.model.itens.filter(item => item.done);
   }
   addItem(newItem, prioridade, dataTermino) {
  let b=0;
  for(let i =0;i<this.model.itens.length;i++){
    if(newItem==this.model.itens[i].action){
      b++
    }
  }
     if(b==0){
       if (newItem!= "") {
         if(dataTermino!=""){
         this.model.itens.push(new TodoItem(newItem, false, prioridade, dataTermino));
     }
   }
     }
   }
   apagar(itens) { 
     var num = this.model.itens.indexOf(itens);
     this.model.itens.splice(num, 1)
   }
   ordenar(itens){
   this.model.itens.sort(function(a, b){
     a = new Date(a.dataTermino);
     b = new Date(b.dataTermino);
     return a-b;
   });
   }
   alterar(newT, prioridade, dataTermino, i){
    if(newT!=""){
    this.model.itens[i].action =newT;
    this.model.itens[i].prioridade = prioridade;
    }
    if(dataTermino!=""){
    this.model.itens[i].prioridade = prioridade;
    this.model.itens[i].dataTermino = dataTermino;
    }
     if(newT !="" && dataTermino!=""){
    this.model.itens[i].action =newT;
    this.model.itens[i].prioridade = prioridade;
    this.model.itens[i].dataTermino = dataTermino;
 }
   }
 }
 