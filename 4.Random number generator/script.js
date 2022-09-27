const random=document.querySelector(".random");
const generate=document.querySelector(".generate");

generate.addEventListener("click", ()=>{
  const randomNumber=Math.floor(Math.random()*100);
  random.innerHTML=randomNumber;
})
