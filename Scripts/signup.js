

let form = document.querySelector("form");
let phNum=localStorage.getItem("phone") || "";
form.addEventListener("submit",function(e){
    e.preventDefault();   
  let phone = document.querySelector("#phone").value;
  localStorage.setItem("phone", phone);
})

