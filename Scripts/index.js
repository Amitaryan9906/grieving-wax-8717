let data=document.querySelector("form").value;
var disData=[
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" ,name:"Lab Tests",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" ,name:"Healthcare",offer:"UPTO 60% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" ,name:"Health Blogs",offer:""},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"},
    {img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" ,name:"medicine",offer:"UPTO 70% OFF"}

]

let catData=[
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0", name:"Covid essentials"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0", name:"Personal care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0", name:"Health food and drinks"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0", name:"Covid essentials"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0", name:"Personal care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0", name:"Health food and drinks"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0", name:"Covid essentials"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0", name:"Personal care"},
    {img:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0", name:"Health food and drinks"},

]

let newLaunchs=[
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/E76033/godrej-good-knight-advanced-power-activ-cartridge-twin-saver-mosquito-repellent-refill-2x45-ml-1-1641794006.jpg?dim=1024x0",name:"Godrej Good Knight Advance Power", prPrice:"MRP $45",price:"$36.30"},
    {img:"https://cdn01.pharmeasy.in/dam/products_otc/V68495/liveasy-ortho-care-hot-water-bag-red-color-1-liter-2-1660305669.jpg?dim=1024x0",prPrice:"MRP $32"}
]

function discover(data){
   data.forEach(function(elem){

let box=document.createElement("div");

let pImg=document.createElement("img");
pImg.setAttribute("src", elem.img);
pImg.setAttribute("id", "prod_img");

let tital=document.createElement("p");
tital.innerHTML=elem.name;

let offer=document.createElement("p");
offer.innerHTML=elem.offer;

box.append(pImg,tital,offer);
document.querySelector(".discover").append(box)

    })
}discover(disData);

// for pop-up & blur background

function toggle(){
    var blur = document.getElementById("blur");
     blur.classList.toggle("active");
     var p=document.getElementById("container");
     p.classList.toggle("active");
}

// sign up

let form = document.querySelector("#form");
let phNum=JSON.parse(localStorage.getItem("phone")) || [];
form.addEventListener("submit",function(e){
    e.preventDefault();   
  let phoneNum = document.querySelector("#phone").value;

phNum.push(phoneNum)

  localStorage.setItem("phone",JSON.stringify(phNum));
})