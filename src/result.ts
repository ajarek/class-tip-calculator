export class Result{
    tip:number;
    total:number;
    each:number;
constructor(tip:number,total:number,each:number){
    this.tip = tip;
    this.total = total;
    this.each = each;
}
    
render(){
    const result=document.createElement("div");
    result.classList.add("result");
    result.innerHTML=`
    <div class="tip">Tip Amount $ ${this.tip}</div>
    <div class="total">Total Amount $ ${this.total}</div>
    <div class="each">Each Person $ ${this.each}</div>`
    return result;

}


}