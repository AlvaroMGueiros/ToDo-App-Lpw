export class Model {
    user;
    itens;
    dataAtual: Date;
    constructor() {
   this.itens = []
    }
   public sortBydueDate():void{
   this.itens.sort((a:TodoItem, b:TodoItem)=>{
   return +new Date(a.dataTermino)- +new Date (b.dataTermino);
     });
   }
}
export class TodoItem {
    action;
    feito;
    prioridade;
    dataTermino: Date;
    constructor(action, feito, prioridade, dataTermino) {
        this.action = action;
        this.feito = feito;
        this.prioridade = prioridade;
        this.dataTermino = dataTermino;
    }
}