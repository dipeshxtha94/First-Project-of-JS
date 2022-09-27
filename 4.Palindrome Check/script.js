const button= document.querySelector(".button");
const input=document.querySelector(".innput-text");
const result=document.querySelector(".result");


button.addEventListener("click", palindromeChecker);

function palindromeChecker(){
  let reg= /[^a-zA-Z0-9]/g;
  const word= document.querySelector(".input-text").value;

  

  var lowerReg= word.toLowerCase().replace(reg, '');

  var reverseReg= lowerReg.split('').reverse().join('');
  if(word== ""){
    result.innerHTML=`${word} Please Enter a Word!!!`;
    result.style.color= 'red';
  }

  else if(lowerReg==reverseReg){
    result.innerHTML= `${word}  is a palindrome`;
    result.style.color= 'green';
  }
  else{
    result.innerHTML=`${word}  is not a palindrome`;
    result.style.color= 'red';
  }

}