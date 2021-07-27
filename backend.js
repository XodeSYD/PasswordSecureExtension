 

 
 let btn = document.getElementById("tp");
 let btn1 = document.getElementById("gen");
 
 
 
 
 
 
 
 
 
 
 
 
 btn.addEventListener("click",nt);
 btn1.addEventListener("click", generate);
 
 
 








 function nt(){
    
  let level;
  let rp =0;
  let pc=0;
  let np =0;   
  let ct =0;
  let fno =0;
  let li =0;
  let dny =0;

level = document.getElementById("inl").value;
console.log(level);
let cr = 0;

if(level.length >= 12){



  cr+=1;
  console.log(cr);


}
for(var i = 0; i<level.length; i++){

  if(level.charAt(i) == level.charAt(i).toUpperCase()){rp+=1;}
  if(level.charAt(i) == "!"|| level.charAt(i) == "@"|| level.charAt(i) == "#"|| level.charAt(i) == "$"|| level.charAt(i) == "%" || level.charAt(i) == "^" || level.charAt(i) == "&" || level.charAt(i) == "*" || level.charAt(i) == "(" || level.charAt(i) == ")" || level.charAt(i) == "-" || level.charAt(i) == "_"){pc+=1; rp-=1;}
  if(!isNaN(level.charAt(i))){np+=1;rp-=1;}


}
console.log(rp,pc,np,ct,cr);
if(rp>= 4){ fno+=1;}
if( pc>= 3){ li+=1;}
if(np>= 4){dny+=1;}
console.log(fno+li+dny+cr);
let nr = ((fno+li+dny+cr)/4).toString();
let rt = ((fno+li+dny+cr)/4) * 100;
document.getElementById("meter").value = nr; 

if(rt <= 25){

  document.getElementById("ll").innerHTML ="Very Weak" ; 

}

if(rt > 25 && rt<=50){

  document.getElementById("ll").innerHTML =" Weak" ; 

}

if(rt > 50 && rt<=75 ){

  document.getElementById("ll").innerHTML ="Medium" ; 

}

if(rt > 75){

  document.getElementById("ll").innerHTML ="Strong" ; 

}
}
function generate(){

















  // 4  UPPER 
  // 3 
  // 4 NUMB

  console.log("gucci")
  var mn = '1234567890';
  var lc = 'abcdefghijklmnopqrstuvwxyz';
  var ulc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var ccl = '!@#$%^&*()-_+=`~/?.><,;:'


  let rlp =   12+ Math.floor(Math.random()*4)  ;                            

let lclc = lc.charAt(Math.floor(Math.random()*27)) +lc.charAt(Math.floor(Math.random()*27));
let ulcf =  ulc.charAt(Math.floor(Math.random()*27)) + ulc.charAt(Math.floor(Math.random()*27))+ulc.charAt(Math.floor(Math.random()*27)) +ulc.charAt(Math.floor(Math.random()*27));
let mnf = mn.charAt(Math.floor(Math.random()*10))+mn.charAt(Math.floor(Math.random()*10))+mn.charAt(Math.floor(Math.random()*10))+mn.charAt(Math.floor(Math.random()*10));
let fccl = ccl.charAt(Math.floor(Math.random()*25))+ccl.charAt(Math.floor(Math.random()*25))+ccl.charAt(Math.floor(Math.random()*25));






let rp = lclc +ulcf+mnf+fccl;
console.log(rp);

 







document.getElementById("generate").innerHTML= rp;

 }





 
















