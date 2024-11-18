const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});

// // Submission:
// Ensure that you use GitHub to save your code. Make sure all updates are committed and pushed to your repository.
// Complete the JavaScript code as described.
// Test the dynamic generation of product elements in the browser to ensure they are displayed correctly.
// Submit the final JavaScript file (e.g., app.js) for review.
const dealOfTheWeekProductList = [
  {
    id: 1,
    name: "Drohn",
    price: "$199.99",
    description: "Description for monitor",
    image: "img-electronics/drohn.png",
  },
  {
    id: 2,
    name: "USB",
    price: "$19.99",
    description: "Description for monitor",
    image: "img-electronics/usb.png",
  },
  {
    id: 3,
    name: "Earpods",
    price: "$119.99",
    description: "Description for monitor",
    image: "img-electronics/earpods.png",
  },
  {
    id: 4,
    name: "Controler",
    price: "$29.99",
    description: "Description for monitor",
    image: "img-electronics/controler.png",
  },
  {
    id: 5,
    name: "earpods",
    price: "$39.99",
    description: "Description for monitor",
    image: "img-electronics/earpods1.png",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: "$129.99",
    description: "Description for monitor",
    image: "img-electronics/smart-watch.png",
  },
  {
    id: 7,
    name: "Robot",
    price: "$1119.99",
    description: "Description for monitor",
    image: "img-electronics/robot.png",
  },
  {
    id: 8,
    name: "Game",
    price: "$149.99",
    description: "Description for monitor",
    image: "img-electronics/game.png",
  },
  {
    id: 9,
    name: "Chair",
    price: "$159.99",
    description: "Description for monitor",
    image: "img-electronics/chair.png",
  },
  {
    id: 10,
    name: "gegets",
    price: "$49.99",
    description: "Description for monitor",
    image: "img-electronics/gagets.png",
  },
];

// function to generat all the Products of deal of the week
function displaydealOfTheWeekProductList() {
  const productContainer = document.querySelector("main section.dotw ul");

  dealOfTheWeekProductList.forEach((product) => {
    const eachProduct = document.createElement("li");

    eachProduct.innerHTML = `
        <div class="product card">
      <img class="dotwimg" src="${product.image}" alt="${product.name}" />
      <p class="product-name">${product.name}</p>
      <p class="dotwtext product-price" >${product.price}</p>
      <button class="dotwbtt product--buy">Add to Cart</button>
       </div>
    `;

    productContainer.appendChild(eachProduct);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displaydealOfTheWeekProductList);


// <!-- the first section Details up and img bottom --> Js of the electronics shope there are just 2 Products
const electronicsShopeProductList= [
  {
    id: 1,
    name: "Immersive VR Headset",
    price: "€299.99",
    description: "Explore virtual worlds in stunning detail.",
    image: "img-electronics/gagets.png",
  },
  {
    id: 2,
    name: "Arkad Mi Watch Lite",
    price: "€49.99",
    description: "Affordable fitness tracker with 1.4",
    image: "img-electronics/smart-watch.png",
  },

];

function displayElectronicsShopeProductList() {
  const productContainer = document.querySelector("main section.electronics-shope div.electorincs-prudunct-1");

  electronicsShopeProductList.forEach((product) => {
    const eachProduct = document.createElement("div");

    eachProduct.innerHTML = `
        <div class="product card">
         <div class="productdetail-img-bottom">
                <h2 class="fonth2 product-name">${product.name}</h2>
                <span class="pruduct-span product-price">${product.price}</span>
                <p class="pruducht-p">${product.description}</p>
                <div class="cta">
                  <button class="learn-more">Learn more</button>
                  <button class="add product--buy">Add to Cart</button>
                </div>
                <img src="${product.image}" alt="${product.name}">
               </div>
                </div>
    `;

    productContainer.appendChild(eachProduct);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayElectronicsShopeProductList);

// there ist the Sort option as well and this is the Part of All Products

const allproductListOfTheShop = [
  {
    id: 1,
    name: "T-Shirt",
    description: "t-shirt-1",
    price: "29.99 €",
    image: "img-clothings/t-shirt-1.png",
  },
  {
    id: 2,
    name: "Boots",
    description: "boots",
    price: "99.99 €",
    image: "img-clothings/boots.png",
  },
  {
    id: 3,
    name: "Jacket",
    description: "jacket",
    price: "149.99 €",
    image: "img-clothings/jackeet.png",
  },
  {
    id: 4,
    name: "Hat",
    description: "hat",
    price: "19.99 €",
    image: "img-clothings/hat.png",
  },
  {
    id: 5,
    name: "T-Shirt 3",
    description: "t-shirt-3",
    price: "34.99 €",
    image: "img-clothings/t-shirt-3.png",
  },
  {
    id: 6,
    name: "Bots",
    description: "bots",
    price: "89.99 €",
    image: "img-clothings/bots.png",
  },
  {
    id: 7,
    name: "Jacket",
    description: "jacket",
    price: "139.99 €",
    image: "img-clothings/jacket.png",
  },
];

function displayClothingProductList() {
  const productContainer = document.querySelector("main section.shopping ul"); // Assuming the ul has a class of "products-list"

  allproductListOfTheShop.forEach((product) => {
    const eachProduct = document.createElement("li");
    eachProduct.classList.add("products");

    eachProduct.innerHTML = `
        <div class="product card">
      <img class="products-img" src="${product.image}" alt="${product.description}"/>
      <div class="products-description">
        <p class="product-name">${product.description}</p>
        <span class="product-price">${product.price}</span>
        <button class="add product--buy">Buy Now</button>
      </div>
       </div>
    `;

    productContainer.appendChild(eachProduct);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayClothingProductList);


// Sorting functionality
document.addEventListener("DOMContentLoaded", () => {
  const sortDropdown = document.getElementById("sort");
  const productList = document.querySelector("main section.shopping ul");

  sortDropdown.addEventListener("change", () => {
    const sortOrder = sortDropdown.value;
    const products = Array.from(productList.children);

    // Sorting products by price
    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector(".product-price").textContent.replace("€", "").trim()
      );
      const priceB = parseFloat(
        b.querySelector(".product-price").textContent.replace("€", "").trim()
      );

      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    // Clear the product list and append sorted products
    productList.innerHTML = "";
    sortedProducts.forEach((product) => {
      productList.appendChild(product);
    });
  });
});

// the shopping Cart
// not working


// let iconCart = document.querySelector('.card');
// let body = document.querySelector('body');

// iconCart.addEventListener('click', ()=>{
//   body.classList.toggle('showCart')
// })


// document.addEventListener("DOMContentLoaded", init);

// MILESTONE 3 suggestions:
//the Cart display and Content section 
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalCart");
  const cartLink = document.getElementById("cartIcon");
  const closeBtn = document.querySelector(".modal-cart-close");

  const cartItems = [];
  const cartDisplay = document.querySelector(".modal-cart-content p");
  // Open the modal when the cart icon is clicked
  cartLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Make the modal visible
    setTimeout(() => {
      modal.classList.add("show"); // Add the "show" class for animation
    }, 10);
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show"); // Remove the "show" class
    setTimeout(() => {
      modal.style.display = "none"; // Hide the modal after animation
    }, 300);
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });
  // shopping section and add and buy

  const addToCartButtons = document.querySelectorAll(".product--buy");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".product.card");
      const productName = product.querySelector(".product-name").textContent;
      const productPrice = product.querySelector(".product-price").textContent;
      cartItems.push({
        name: productName,
        price: productPrice,
      });
      displayConfirmation(productName);
      updateCartDisplay();
    });
  });
  function updateCartDisplay() {
    if (cartItems.length === 0) {
      cartDisplay.textContent = "Your cart is empty.";
    } else {
      cartDisplay.innerHTML =
        "<ul style='color: red'>" +
        cartItems
          .map((item) => `<li>${item.name} - ${item.price}</li>`)
          .join("") +
        "</ul>";
    }
  }
  function displayConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-message";
    confirmation.textContent = `${productName} has been added to the cart.`;
    document.body.appendChild(confirmation);
    setTimeout(() => {
      confirmation.remove();
    }, 3000);
  }
});




// add to cart section
//   const addToCartButtons = document.querySelectorAll(".add");
//   addToCartButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const product = event.target.closest(".product.card");
//       const productName = product.querySelector(".name").textContent;
//       const productPrice = product.querySelector(".price").textContent;
//       cartItems.push({
//         name: productName,
//         price: productPrice,
//       });
//       displayConfirmation(productName);
//       updateCartDisplay();
//     });
//   });
//   function updateCartDisplay() {
//     if (cartItems.length === 0) {
//       cartDisplay.textContent = "Your cart is empty.";
//     } else {
//       cartDisplay.innerHTML =
//         "<ul style='color: red'>" +
//         cartItems
//           .map((item) => `<li>${item.name} - ${item.price}</li>`)
//           .join("") +
//         "</ul>";
//     }
//   }
//   function displayConfirmation(productName) {
//     const confirmation = document.createElement("div");
//     confirmation.className = "confirmation-message";
//     confirmation.textContent = `${productName} has been added to the cart.`;
//     document.body.appendChild(confirmation);
//     setTimeout(() => {
//       confirmation.remove();
//     }, 3000);
//   }
// });
// });
// Cart
//const addToCartButtons = document.querySelectorAll(".product--buy");

//addToCartButtons.forEach((button) => {
//button.addEventListener("click", (event) => {
// code ... (add to cart button click logic)
// });
//});

//function updateCartDisplay() {
// code ...
//}

//function displayConfirmation(productName) {
// code ...
//}

// MILESTONE 4 suggestions:
// Input search

//searchInput.addEventListener("input", () => {
// code ...
//});

// Remember to add a fetch too!

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=> ... )
// ...
