let menu = document.getElementById ("menu");
let menubtn = document.getElementById ("menubtn");
menu2 = document.getElementById ("menu2");
menubtn2 = document.getElementById ("menubtn2");

menu2.addEventListener  ("click", ()=>{
menubtn2.classList.toggle("hidden")
});
menu.addEventListener  ("click", ()=>{
menubtn.classList.toggle("hidden")
});
