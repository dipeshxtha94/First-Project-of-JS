const result=document.querySelector(".result");
const inp=document.querySelector(".input-text");
const btn=document.querySelector(".btn");

btn.addEventListener("click", vowelCounter);

function vowelCounter(){
  var input=inp.value.toLowerCase();
  let count =0;
  if(input.length==""){
    result.innerHTML=`Please Enter A Text!!`
  }
  else{
  for(var i=0; i<input.length; i++){
    let word =input[i];
    if(word.match(/[aeiou]/g))
      count++;
  } 
  result.innerHTML= `${inp.value.toUpperCase()} has ${count} vowels`;
}
}
  