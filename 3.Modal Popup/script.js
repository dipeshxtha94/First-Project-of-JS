const modal=document.querySelector(".modal");
const btn=document.querySelector(".btn");
const close=document.querySelector(".close");

btn.addEventListener("click", btnevent);

modal.addEventListener("click", closeevent);

close.addEventListener("click", closeevent);

function btnevent(e){

  e.preventDefault();
  modal.style.display="block";

}

function closeevent(){
  modal.style.display="none";
}
