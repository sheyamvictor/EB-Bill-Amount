var inbox = document.getElementById("inbox")

var btn = document.getElementById("ans")

var result = document.getElementById("result")

btn.addEventListener("click",()=>{

    var unit=inbox.value
console.log(unit)


if(unit<=50){
    bill=unit*0.75

}
 else if(unit<=100){
    bill=50*0.75 + (unit-50)*1
    
 }

 else if(unit>=100){
    bill=50*0.75 + 100*1 +(unit-100)*1.30
 }

 else if(unit>=150){
    bill=50*0.75 + 100*1 +100*1.30(unit-100)*1.40
 }

 else if(unit>=250){
    bill=50*0.75+100*1+100*1.30(unit-150)*2
 }


result.innerHTML=   "Your Bill amount is  "  +bill


})