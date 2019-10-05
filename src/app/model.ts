export class Model{
   user;
   items;
   constructor(){
       this.user = "Álvaro";
       this.items = [];
   }
}
export class TodoItem{
   action;
   done;
   priority;
   data: Date;
   constructor(action, done, priority, data){
       this.action=action;
       this.done=done;
       this.priority=priority;
       this.data=data;
   }

}