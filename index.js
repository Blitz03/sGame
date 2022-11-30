//Search button
let searchButton = document.querySelector(".search-button");
let searchButtonI = document.querySelector(".search-button i");

let searchBox = document.querySelector(".search-input");
let searchClose = document.querySelector(".search-close");

searchButton.addEventListener("mouseover", searchButtonOpen);
searchClose.addEventListener("click", searchButtonClose);

function searchButtonOpen() {
  searchButtonI.style.cssText = "visibility: hidden;";
  searchBox.style.cssText = "visibility: visible; opacity: 1; top: 30px;";
};

function searchButtonClose() {
  searchButtonI.style.cssText = "visibility: visible;";
  searchBox.style.cssText = "visibility: hidden; opacity: 0; top: 40px";
};
//Search button



//Landing slider
let myRightArrow = document.querySelector(".landing-right");
let myLeftArrow = document.querySelector(".landing-left");

let myLeftSlide = document.querySelector(".first-slide");
let myRightSlide = document.querySelector(".second-slide");


myRightArrow.addEventListener("click", slideRight)
myLeftArrow.addEventListener("click", slideLeft)


function slideRight() {
  myRightSlide.style.cssText = `visibility: visible; opacity: 1;`;
  myLeftSlide.style.cssText = `visibility: hidden; opacity: 0;`;
};

function slideLeft() {
  myRightSlide.style.cssText = `visibility: hidden; opacity: 0;`;
  myLeftSlide.style.cssText = `visibility: visible; opacity: 1;`;
};
//Landing slider



//Cart 
let counter = 0;
let cartButtons = document.querySelector(".header-cart .buttons");
let cartProducts = document.querySelector(".products");
let headerCart = document.querySelector(".header-cart");
if (counter <= 0) {
  let empty = document.querySelector(".empty");
  empty.style.cssText = "display: block;";
  cartButtons.style.display = "none";
  cartProducts.style.overflow = "hidden";
  headerCart.style.cssText = "padding: 20px 0;";
};
let addButtons = document.querySelectorAll(".add-cart-button");
let removeButtons = document.querySelectorAll(".remove");
for (let i = 0; i < addButtons.length; i++) {
  let button = addButtons[i];
  button.addEventListener("click", addToCartClicked);
};

for (let i = 0; i < removeButtons.length; i++) {
  let button = removeButtons[i];
  button.addEventListener("click", removeFromCart);
};

let inputs = document.querySelectorAll(".quantity");
for (let i = 0; i < inputs.length; i++) {
  let button = inputs[i];
  button.addEventListener("change", updateCartTotal);
};

function removeFromCart(event) {
  // productCounter = 0;
  counter--;
  let button = event.target;
  button.parentElement.parentElement.remove();
  if (counter <= 0) {
    let empty = document.querySelector(".empty");
    empty.style.cssText = "display: block;";
    cartButtons.style.display = "none";
    cartProducts.style.overflow = "hidden";
    headerCart.style.cssText = "padding: 20px 0;";
  };
  updateCartTotal();
};

function addToCartClicked(event) {
  counter++;
  if (counter > 0) {
    let empty = document.querySelector(".empty");
    empty.style.cssText = "display: none;";
    cartProducts.style.overflow = "scroll";
    headerCart.style.cssText = "padding: 0;";
    cartButtons.style.display = "flex";
  };
  let button = event.target;
  let box = button.parentElement.parentElement.parentElement;
  let imgSrc = box.querySelector("img").src;
  let title = box.querySelector("h3").innerText;
  let price = box.querySelector("span").innerText;
  addToCart(imgSrc, title, price);
  updateCartTotal();
};

function addToCart(imgSrc, title, price) {
  // let titles = document.querySelectorAll(".box h4");
  // console.log(titles);
  // for (let i = 0; i < titles.length; i++) {
  //   if (titles[i].innerText === title) {
  //     alert("hi");
  //     return;
  //   };
  // };

//Purchase page

  let purchasePage = document.createElement("div");
  let purchaseContainer = document.querySelector(".recommended .container");
  purchaseContainer.prepend(purchasePage);
  purchasePage.classList.add("purchase-page");

  let purchasePageContent = `
  <div class="purchase-head">
  <div class="head-title">
    <h3>Added to cart successfully. What is next?</h3>
  </div>
  <div class="purchase-close">
    <i class="fa-solid fa-xmark purchase-close-icon"></i>
  </div>
</div>
<div class="purchase-content">
  <div class="purchase-box">
    <div class="img">
      <img src="${imgSrc}" alt="">
    </div>
    <div class="purchase-details">
      <h4>${title}</h4>
      <!-- <input type="number" class="purchase-quantity" min="1" value="1"> -->
      <span class="purchase-product-quantity">1x</span>
      <span class="purchase-price">${price}</span>
    </div>
  </div>
  <div class="purchase-checkout">
    <div class="purchase-checkout-container">
      <div class="checkout-button">
        <button>Checkout</button>
      </div>
      <div class="purchase-subtotal">
        <h4>Order Subtotal</h4>
        <span class="purchase-subtotal-text">$00.00</span>
        <span class="purchase-subtotal-quantity">Your cart contains <span class="subtotal-quantity">0</span> items</span>
      </div>
      <div class="view-cart-buttons">
        <button>Continue shopping</button>
        <button>View Cart</button>
      </div>
    </div>
  </div>
</div>
  `
  purchasePage.innerHTML = purchasePageContent;
  let closeIcon = document.querySelector(".purchase-close-icon");
  closeIcon.addEventListener("click", () => {
    purchasePage.style.cssText = "transition: .2s; visibility: hidden; opacity: 0;";
  });

  let subtotalQuantity = document.querySelector(".subtotal-quantity");
  subtotalQuantity.innerText = counter;


//Purchase page




  let imgsSrc = document.querySelectorAll(".header-cart .box .img img");
  let quantityInputs = document.querySelectorAll(".quantity");
  for (let i = 0; i < imgsSrc.length; i++) {
    if (imgsSrc[i].src === imgSrc) {
      // productCounter++;
      // let box = imgsSrc[i].parentElement.parentElement;
      // let span = box.querySelector(".x");
      // span.innerText = productCounter + "x";
      quantityInputs[i].value++;
      counter--;
      return;
    };
  };
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  let cartProducts = document.querySelector(".header-cart .products");
  let newBoxContent = `
    <div class="img">
      <img src="${imgSrc}" alt="">
    </div>
    <div class="details">
      <h4>${title}</h4>
      <!-- <span class="x">1x</span> -->
      <input type="number" class="quantity" value="1" min="1"></input>
      <span class="cart-box-price">${price}</span>
      <i class="fa-solid fa-square-minus remove"></i>
    </div>
  `;
  newBox.innerHTML = newBoxContent;
  cartProducts.prepend(newBox);
  newBox.querySelector(".remove").addEventListener("click", removeFromCart);
  newBox.querySelector(".quantity").addEventListener("change", updateCartTotal);
  let cartQuantity = document.querySelector(".header-cart-quantity");
  cartQuantity.innerText = counter;
};



function updateCartTotal() {
  let cartBoxes = document.querySelectorAll(".products .box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let box = cartBoxes[i];
    let price = box.querySelector(".cart-box-price").innerText.replace("$", "");
    // let price = parceFloat(priceElement);
    let quantity = box.querySelector(".quantity").value;
    total = total + (price * quantity);
    console.log(price * quantity);
  };
  document.querySelector(".purchase-subtotal-text").innerText = "$" + total;
};


//Cart 
