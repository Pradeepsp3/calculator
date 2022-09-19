let result = document.getElementById('result');
var btn0 = document.getElementById('btn0'),
    btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4'),
    btn5 = document.getElementById('btn5'),
    btn6 = document.getElementById('btn6'),
    btn7 = document.getElementById('btn7'),
    btn8 = document.getElementById('btn8'),
    btn9 = document.getElementById('btn9'),
    btnpercent = document.getElementById('btnpercent'),
    btnclr = document.getElementById('btnclr'),
    btndiv = document.getElementById('btndiv'),
    btnmul = document.getElementById('btnmul'),
    btnsub = document.getElementById('btnsub'),
    btnequ = document.getElementById('btnequ'),
    btndot = document.getElementById('btndot'),
    btnpow = document.getElementById('btnpow'),
    btnsum = document.getElementById('btnsum'),
    num1 = [];
    


    
// numbers 

btn0.onclick =  function(){
     num1.push(btn0.innerHTML);
     result.value = num1.join(''); 
}


btn1.onclick =  function(){
     num1.push(btn1.innerHTML);
     result.value = num1.join('');
}

btn2.onclick = () => {
     num1.push(btn2.innerHTML);
     result.value = num1.join(''); 
}

btn3.onclick =  function(){
     num1.push(btn3.innerHTML);
     result.value = num1.join('');
}

btn4.onclick =  function(){
     num1.push(btn4.innerHTML);
     result.value = num1.join('');
}

btn5.onclick =  function(){
     num1.push(btn5.innerHTML);
     result.value = num1.join('');
}

btn6.onclick =  function(){
     num1.push(btn6.innerHTML);
     result.value = num1.join('');
}

btn7.onclick =  function(){
     num1.push(btn7.innerHTML);
     result.value = num1.join('');
}

btn8.onclick =  function(){
     num1.push(btn8.innerHTML);
     result.value = num1.join('');
}

btn9.onclick =  function(){
     num1.push(btn9.innerHTML);
     result.value = num1.join('');
}

//decimal

var click = 0;
btndot.onclick = () => {      
     if(click < 1){ 
          num1.push(btndot.innerHTML);
          result.value = num1.join('');
          click += 1;
        } else{
             result.value = "error";
        }    
 }          


//addition
btnsum.onclick = () =>{
     sessionStorage.setItem("sub1", result.value);
     sessionStorage.setItem("operator", "+" )
     num1 = result.value;
     num1 = [];     
     }

     
 
//subtraction     
btnsub.onclick = () =>{
          sessionStorage.setItem("sub1", result.value);
          sessionStorage.setItem("operator", "-" )
          num1 = result.value;
          num1 = [];          
          }     

//multiplication

btnmul.onclick = () =>{
     sessionStorage.setItem("sub1", result.value);
     sessionStorage.setItem("operator", "*" )
     num1 = result.value;
     num1 = [];          
     }  

//division

btndiv.onclick = () =>{
     sessionStorage.setItem("sub1", result.value);
     sessionStorage.setItem("operator", "/" )
     num1 = result.value;
     num1 = [];          
     }  

//powerof

btnpow.onclick = () =>{
     sessionStorage.setItem("sub1", result.value);
     sessionStorage.setItem("operator", "^" )
     num1 = result.value;
     num1 = [];          
     }  
     
//percentage

btnpercent.onclick = () =>{
     sessionStorage.setItem("sub1", result.value);
     sessionStorage.setItem("operator", "%" )
     num1 = result.value;
     num1 = [];          
     }  



//equalto     

btnequ.onclick = function(){
     sessionStorage.setItem("sub2", result.value);
     let opt = sessionStorage.getItem("operator");
     let sub1 = sessionStorage.getItem("sub1");
     let sub2 = sessionStorage.getItem("sub2");
     let dec = "."
     //if(sub1.includes(dec) || sub2.includes(dec)){
          if( opt == "+" ){
               result.value = parseFloat(sub1) + parseFloat(sub2); 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else if( opt == "-" ){
               result.value = parseFloat(sub1) - parseFloat(sub2); 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else if( opt == "*" ){
               result.value = parseFloat(sub1) * parseFloat(sub2); 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else if( opt == "/" ){
               result.value = parseFloat(sub1) / parseFloat(sub2); 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else if( opt == "^" ){
               result.value = parseFloat(sub1) ** parseFloat(sub2); 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else if( opt == "%" ){
               result.value = (parseFloat(sub2) * 100) / parseFloat(sub1) ; 
               sessionStorage.setItem("sub1", result.value);
               sessionStorage.removeItem("sub2");
          }else{
               result.value = "error";
          }


          // For non decimal 

     
//           if( opt == "+" ){
//           result.value = parseInt(sub1) + parseInt(sub2); 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else if( opt == "-" ){
//           result.value = parseInt(sub1) - parseInt(sub2); 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else if( opt == "*" ){
//           result.value = parseInt(sub1) * parseInt(sub2); 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else if( opt == "/" ){
//           result.value = parseInt(sub1) / parseInt(sub2); 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else if( opt == "^" ){
//           result.value = parseInt(sub1) ** parseInt(sub2); 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else if( opt == "%" ){
//           result.value = (parseInt(sub2) * 100) / parseInt(sub1) ; 
//           sessionStorage.setItem("sub1", result.value);
//           sessionStorage.removeItem("sub2");
//      }else{
//           result.value = "error";
//      }
// }

}


//clear all
btnclr.onclick = ()=>{
     sessionStorage.removeItem("sub1","sub2");
     sessionStorage.removeItem("operator");
     result.value = 0;
     num1 = result.value;
     num1 = []; 
     click = 0;
} 



// function display(event){
//      this.onclick = () => {
//      num1.push(this.innerHTML);
//      result.value = num1.join('');   
// }
// }

// btn3.onclick = display();

//keyboard event

document.addEventListener('keydown', (event) => {
    if(event.key == 0){
     num1.push(btn0.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 1){
     num1.push(btn1.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 2){
     num1.push(btn2.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 3){
     num1.push(btn3.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 4){
     num1.push(btn4.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 5){
     num1.push(btn5.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 6){
     num1.push(btn6.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 7){
     num1.push(btn7.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 8){
     num1.push(btn8.innerHTML);
     result.value = num1.join('');
    }else if(event.key == 9){
     num1.push(btn9.innerHTML);
     result.value = num1.join('');
    }else if(event.key == "+"){
     btnsum.onclick();
    }else if(event.key == "-"){
     btnsub.onclick();
    }else if(event.key == "*"){
     btnmul.onclick();
    }else if(event.key == "/"){
     btndiv.onclick();
    }else if(event.key == "."){
     btndot.onclick();
    }else if(event.key == "=" || event.key == "Enter"){
     btnequ.onclick();
    }else if(event.key == "%"){
     btnpercent.onclick();
    }else if(event.key == "^"){
     btnpow.onclick();
    }else if(event.key == "Backspace" || event.key == "Delete"){
     btnclr.onclick();
    }else if(event.key == "."){
     btndot.onclick();
    }else {
     num1.push("invalid numeric")
    }
})

// document.addEventListener('keydown', (event) => {
//      if(event.key == '+'){
//           btnsum();
//      }
// })