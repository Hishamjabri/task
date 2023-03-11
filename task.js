let cartsData = JSON.parse([localStorage.getItem("data")]);
// create data and store them into local storage
function add() {
  let cartsData = [
    {
      id: 0,
      productName: "Cars",
      productPrice: "18$",
      productImage: "./images/cars.jpg",
      addCart: false,
    },
    {
      id: 1,
      productName: "Hand-clock-boy",
      productPrice: "20$",
      productImage: "./images/handclockboy.jpg",
      addCart: false,
    },
    {
      id: 2,
      productName: "Bracelet",
      productPrice: "30$",
      productImage: "./images/bracelet.jpg",
      addCart: false,
    },
    {
      id: 3,
      productName: "Hand-clock-girl",
      productPrice: "20$",
      productImage: "./images/handclockgirl.jpg",
      addCart: false,
    },
    {
      id: 4,
      productName: "Jusice League",
      productPrice: "40$",
      productImage: "./images/justiceleague.jpg",
      addCart: false,
    },
    {
      id: 5,
      productName: "Toy story",
      productPrice: "50$",
      productImage: "./images/toystory.jpg",
      addCart: false,
    },
  ];
  localStorage.setItem("data", JSON.stringify(cartsData));
}
// push data into Html
let cartContainer = document.querySelector(".cartContainer");
function pushCarts() {
  cartsData.forEach((data) => {
    const addCart = !data.addCart ? "Add to cart" : "Remove from cart";
    cartContainer.innerHTML += `
    <div class="cart">
    <img src=${data.productImage} class="productImage">
    <h1 class="productTitle"> ${data.productName}</h1>
    <div class="view">
    <a title="quick view" class="quickView" id="${data.id}">
    <img src="./images/eye-solid.svg">
    </a>
    <button class="productButton" id=${data.id}> ${addCart}</button>
    <p class="productPrice">${data.productPrice}</p>
    <div>
    </div>`;
  });
}
add();
pushCarts();
// create quickview
let quickView = document.querySelectorAll(".quickView");
let productView = document.querySelector(".productView");
quickView.forEach((click) => {
  click.addEventListener("click", () => {
    const addCart = !cartsData[click.id].addCart
      ? "Add to cart"
      : "Remove from cart";
    productView.style.display = "flex";
    productView.innerHTML += `<div class="viewContainer">
    <img src=${cartsData[click.id].productImage} class="viewImage">
    <div class="viewDetails">
    <img src="./images/xmark-solid.svg" class="viewExit">
    <h1 class="productTitle"> ${cartsData[click.id].productName}</h1>
    <div>
    <button class="productButton"> ${addCart}</button>
    <p class="productPrice">${cartsData[click.id].productPrice}</p>
    </div>
    </div>
    </div>`;
    let viewExit = document.querySelector(".viewExit");
    viewExit.addEventListener("click", () => {
      productView.style.display = "none";
      productView.innerHTML = "";
    });
  });
});
// connect the buuton with shopping cart
let counter = document.querySelector(".counter");
let addButton = document.querySelectorAll(".productButton");
let dropDown = document.querySelector(".dropDown");
addButton.forEach((add) => {
  add.addEventListener("click", () => {
    cartsData[add.id].addCart = !cartsData[add.id].addCart;

    if (add.innerHTML == " Add to cart") {
      add.innerHTML = "Remove from cart";
      counter.innerHTML = +counter.innerHTML + 1;
      dropDown.innerHTML += `<div id="myCart${add.id}">
      <img src=${cartsData[add.id].productImage}>
      <h1>${cartsData[add.id].productName}</h1></div>`;
    } else {
      add.innerHTML = " Add to cart";
      counter.innerHTML = +counter.innerHTML - 1;
      let remCart = document.querySelector(`#myCart${add.id}`);
      dropDown.removeChild(remCart);
    }
  });
});
let shoppingCart = document.querySelector(".cartIcon");
shoppingCart.addEventListener("click", () => {
  dropDown.style.right === "-100%"
    ? (dropDown.style.right = "0")
    : (dropDown.style.right = "-100%");
  dropDwon.style.display==="none"?(dropDown.style.display = "block"):(dropDown.style.display = "none");
});
