//  For Log in
function toggle(){
    var blur = document.getElementById("cont");
     blur.classList.toggle("active");
     var p=document.getElementById("container");
     p.classList.toggle("active");
}

// for pop-up & blur background
//  total price 

let getData=JSON.parse(localStorage.getItem("dcart"))

let totalP=0;
for(let i=0;i<getData.length;i++){
  let temp=""
temp+=getData[i].price
let num=temp.replace(/\D/g,"");
totalP+=Number(num)
}
document.querySelector(".total-price").innerHTML=totalP

let cartData=JSON.parse(localStorage.getItem("dcart"))
let dBody=document.getElementById("body")



function display(data){
dBody.innerHTML=null;
     data.map(function(ele,index){
        let box=document.createElement("a");
     
     let pImg=document.createElement("img");
     pImg.setAttribute("src", ele.img);
     pImg.setAttribute("id", "prod_img2");
     
     let tital=document.createElement("p");
     tital.innerHTML=ele.name;
    
   let offer=document.createElement("p");
   offer.innerHTML=ele.offer

    let prev=document.createElement("p");
   let del=document.createElement("del")
   prev.append(del);
   del.innerHTML=ele.prPrice
    let nowPr=document.createElement("p");
    nowPr.innerHTML=ele.price;
   
    let remove=document.createElement("button");
    remove.innerHTML="Remove";


    remove.addEventListener("click",function(){
      deleteData(data,index)
    })
     box.append(pImg,tital,offer,prev,nowPr,remove);
     document.querySelector("#body").append(box)
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


display(cartData)
let totalData=document.querySelector(".total").innerHTML=cartData.length


//    For remove from cart

function deleteData(data,index) {
   cartData=JSON.parse(localStorage.getItem("dcart"))
cartData=   data.filter(function(elem,i){
   return i!=index
})
localStorage.setItem("dcart",JSON.stringify(cartData))
display(cartData)
totalItems()


}





   


function totalItems(){
   return totalData=document.querySelector(".total").innerHTML=cartData.length

}

