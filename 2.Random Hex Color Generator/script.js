const color= document.querySelector(".color");
const generate= document.querySelector(".generator");

const generateColor= ()=>{
  const randomNumber= Math.random().toString(16).substring(2,8);
  color.innerHTML="#" + randomNumber;
  document.body.style.backgroundColor="#" + randomNumber;
}

generate.addEventListener("click", generateColor);