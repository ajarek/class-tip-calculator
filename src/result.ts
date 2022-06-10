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
    <div class="tip">Tip Amount $ ${(this.tip*this.each).toFixed(2)}</div>
    <div class="total">Total Amount $ ${(this.tip+(this.tip*this.each)).toFixed(2)}</div>
    <div class="each">Each Person $ ${((this.tip+(this.tip*this.each))/this.total).toFixed(2)}</div>`
    return result;

}


}