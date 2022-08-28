let data=document.querySelector("form").value;
var disData=[
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" ,name:"Lab Tests",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" ,name:"Healthcare",offer:"UPTO 60% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" ,name:"Health Blogs",offer:""},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" ,name:"offer",offer:"UPTO 70% OFF"}

]

let catData=[
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0", name:"Covid essentials"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0", name:"Personal care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0", name:"Health food and drinks"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0", name:"Covid essentials"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0", name:"Beauty"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0", name:"skin care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0", name:"Home Care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0", name:"Ayurvedic care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f970ef9868093acb9d1d37a9387912f9.png?f=png?dim=256x0", name:"Sexual wellness"}

]

let newLaunchs=[
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"}
]


let trending=[
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/I04915/horlicks-health-nutrition-drink-jar-500-g-2-1655880764.jpg?dim=1440x0",name:"Horlicks Health & Nutrition Drink Jar", prPrice:"",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=1440x0",name:"Everherb Karela Jamun Juice ",prPrice:"MRP $62", price: "MRP $50"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg?dim=720x0",name:"Dettol",prPrice:"MRP $32", price: "MRP $30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",name:"liveasy-ortho-care-hot-water-bag-",prPrice:"MRP $32", price: "MRP $30"}
]

// Set to localStorage

localStorage.setItem("discountData",JSON.stringify(disData));
localStorage.setItem("category",JSON.stringify(catData));
localStorage.setItem("new_launches",JSON.stringify(newLaunchs));
localStorage.setItem("trending",JSON.stringify(trending));



function discover(data){
   data.forEach(function(elem){
    let box=document.createElement("a");
    box.setAttribute("href","offer.html")

let pImg=document.createElement("img");
pImg.setAttribute("src", elem.img);
pImg.setAttribute("id", "prod_img");

let tital=document.createElement("p");
tital.innerHTML=elem.name;

let offer=document.createElement("p");
offer.innerHTML=elem.offer;

box.append(pImg,tital,offer);
box.addEventListener("click",function(){
    localStorage.setItem("services",JSON.stringify(elem))

     })
document.querySelector(".discover").append(box)

    })
}discover(disData);

// for category display
function category(data){
    data.forEach(function(elem){
 
     let box=document.createElement("a");
     box.setAttribute("href","offer.html")
 
 let pImg=document.createElement("img");
 pImg.setAttribute("src", elem.img);
 pImg.setAttribute("id", "prod_img1");
 
 let tital=document.createElement("p");
 tital.innerHTML=elem.name;
 

 
 box.append(pImg,tital);
 box.addEventListener("click",function(){
    localStorage.setItem("categ",JSON.stringify(elem))

     })
 document.querySelector(".categories").append(box)
 
     })
 }category(catData);

//  for new launches

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
 document.querySelector(".new_launch").append(box)
 
     })
 }newlaunch(newLaunchs);

//  trendig

function trendings(data){
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

 box.addEventListener("click",function(){
    localStorage.setItem("viewCart",JSON.stringify(elem))
     })

 
 box.append(pImg,tital,prev,nowPr);
 document.querySelector(".trending").append(box)
 
     })
 }trendings(trending);

// for pop-up & blur background

function toggle(){
    var blur = document.getElementById("blur");
     blur.classList.toggle("active");
     var p=document.getElementById("container");
     p.classList.toggle("active");
  
}

let logIn=document.querySelector(".btn");
logIn.addEventListener("click",login);
function login(){
    var blur = document.getElementById("blur");
     blur.classList.toggle("active");
     var p=document.getElementById("container2");
     p.classList.toggle("active");  
}

document.querySelector("#lgbtn").innerHTML="Login"

// sign up data

let form = document.querySelector("#form");
let signup=JSON.parse(localStorage.getItem("user_Data")) || [];
form.addEventListener("submit",function(e){
    e.preventDefault();   

let obj={
    email:form.email.value,
    phone:form.phone.value,
    password:form.password.value
};
if(obj.email=="" || obj.phone=="" || obj.password==""){
    alert("Please enter all required fields");
    return
}
signup.push(obj)

  localStorage.setItem("user_Data",JSON.stringify(signup));
  alert("Signup success!");
})


// sign in data

let userlogin= document.querySelector("#lgbtn");

let user=JSON.parse(localStorage.getItem("user_Data"))

userlogin.addEventListener("click",function(e){
 signIn(e)

})



function signIn(e) {
    let email = document.getElementById("user_email").value, pwd = document.getElementById("user_password").value;
    let formData = JSON.parse(localStorage.getItem("user_Data")) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem("user_Data")).some(data => data.email == email && data.password == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "index.html";
        alert("success")
    }
    e.preventDefault();
}






    


