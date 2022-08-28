// for pop-up & blur background

function toggle(){
    var blur = document.getElementById("cont");
     blur.classList.toggle("active");
     var p=document.getElementById("container");
     p.classList.toggle("active");
}

let disData=JSON.parse(localStorage.getItem("discountData"));
let newLaunchs=JSON.parse(localStorage.getItem("new_launches"));
let trendData=JSON.parse(localStorage.getItem("trending"));
let catData=JSON.parse(localStorage.getItem("category"));

let dis=JSON.parse(localStorage.getItem("services")) ;
let category=JSON.parse(localStorage.getItem("categ")) ;
var cart=JSON.parse(localStorage.getItem("viewCart")) ;

console.log(dis) ;
let body=document.querySelector("#cont");
let cData=JSON.parse(localStorage.getItem("dcart")) || [];

function display(data){
     
            let box=document.createElement("a");
     
     let pImg=document.createElement("img");
     pImg.setAttribute("src", data.img);
     pImg.setAttribute("id", "prod_img2");
     
     let tital=document.createElement("p");
     tital.innerHTML=data.name;
    
   let offer=document.createElement("p");
   offer.innerHTML=data.offer
    
   let addAttr=document.createElement("a");
    let add=document.createElement("button");
    add.innerHTML="Add to Cart";
    addAttr.setAttribute("href","cart.html")

   addAttr.append(add)

    add.addEventListener("click",function(){
      if(cData.name!==data.name){
        cData.push(data)  
      }
      
        localStorage.setItem("dcart",JSON.stringify(cData))
    })

    let prev=document.createElement("p");
    prev.innerHTML=data.prPrice;
   
    let nowPr=document.createElement("p");
    nowPr.innerHTML=data.price;
   
     
     box.append(pImg,tital,offer,prev,nowPr,addAttr);
     document.querySelector("#cont").append(box)
     if(data.offer==undefined){
        offer.innerHTML=""
     }
     if(data.prPrice==undefined){
        prev.innerHTML="";
     }
     if(data.price==undefined){
        price.innerHTML="";
     }
     
}
display(cart)

// ohter recommended

function newlaunch(data){
   data.forEach(function(elem){

let box=document.createElement("a");
box.setAttribute("href","product.html")
let pImg=document.createElement("img");
pImg.setAttribute("src", elem.img);
pImg.setAttribute("id", "prod_img2");

let tital=document.createElement("p");
tital.innerHTML=elem.name;

let prev=document.createElement("p");
let del=document.createElement("del")
prev.append(del);
del.innerHTML=elem.prPrice

let nowPr=document.createElement("p");
nowPr.innerHTML=elem.price;




box.append(pImg,tital,prev,nowPr);

box.addEventListener("click",function(){
localStorage.setItem("viewCart",JSON.stringify(elem))
})
document.querySelector(".rec").append(box)

    })
}newlaunch(newLaunchs);