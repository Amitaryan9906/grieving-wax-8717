// for pop-up & blur background

function toggle(){
    var blur = document.getElementById("cont");
     blur.classList.toggle("active");
     var p=document.getElementById("container");
     p.classList.toggle("active");
}
// data

let disData=JSON.parse(localStorage.getItem("discountData"));
let newLaunchs=JSON.parse(localStorage.getItem("new_launches"));
let trendData=JSON.parse(localStorage.getItem("trending"));
let catData=JSON.parse(localStorage.getItem("category"));



let body=document.querySelector("#cont");
let cartData=JSON.parse(localStorage.getItem("dcart")) || [];

function display(data){
     data.map(function(ele){
        let box=document.createElement("a");
        box.setAttribute("href","product.html");

     
        let pImg=document.createElement("img");
        pImg.setAttribute("src", ele.img);
        pImg.setAttribute("id", "prod_img2");
        
        let tital=document.createElement("p");
        tital.innerHTML=ele.name;
       
      let offer=document.createElement("p");
      offer.innerHTML=ele.offer;
       let prev=document.createElement("p");
   let del=document.createElement("del")
   prev.append(del);
   del.innerHTML=ele.prPrice
      
       let nowPr=document.createElement("p");
       nowPr.innerHTML=ele.price;
      
        
        box.append(pImg,tital,offer,prev,nowPr);
        box.addEventListener("click",function(){
         localStorage.setItem("viewCart",JSON.stringify(ele))
     
          })
        document.querySelector("#cont").append(box)
        if(ele.offer==undefined){
           offer.innerHTML=""
        }
        if(ele.prPrice==undefined){
           prev.innerHTML="";
        }
        if(ele.price==undefined){
           price.innerHTML="";
        }
        
     })
           
}
display(trendData);
display(newLaunchs);

console.log(cartData)
