console.log("hello");
var display=document.getElementById("display");
var query="";
var buttons=document.querySelectorAll(".btn-size");
for(var i=0;i< buttons.length;i++){
    var self = buttons[i];
    var operand1="";
    var operand2="";
    var operator="";

self.addEventListener("click",function(ele){

    if(ele.srcElement.innerText=='+/-'){
        display.innerText=(-1)*display.innerText;
    }
   
    else if(ele.srcElement.innerText=='='){
            operand2=display.innerText;
            query=operand1+" "+operator+" "+operand2;
            var result=eval(query);
            display.innerText=result;
            operand1=result;
            operand2="";
            operator="";
            query= "";
            
    }
    else if(ele.srcElement.innerText=='*'||ele.srcElement.innerText=='-'||ele.srcElement.innerText=='/'||ele.srcElement.innerText=='+'){
            operand1=display.innerText;
            operator=ele.srcElement.innerText;
            display.innerText=ele.srcElement.innerText;}

    else if(ele.srcElement.innerText!='AC'){
            if(display.innerText==operator||display.innerText==0)
            display.innerText=ele.srcElement.innerText;
            else 
            display.innerText=display.innerText+ele.srcElement.innerText;
            }
    else
    {display.innerText=0;
        operand2="";
        operand1="";
        operator="";
    query="";}
    console.log(operand1,operand2,operator);
});
}
//[srcElement][innerText]