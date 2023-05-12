import {
  printProductsInCart,
  printTotal,
  printProducts,
} from "../Prints/index.js";

export function HandleMenu() {
  const iconMenuHTML = document.querySelector(".bxs-dashboard");
  const menuHTML = document.querySelector(".navbar_menu");

  iconMenuHTML.addEventListener("click", function () {
    menuHTML.classList.toggle("menu_show");
  });
}
export function PrintHandleMixtup(db) {
  const printHabldeMixtupHTML = document.querySelector(".Filters");
  let shirt = 0;
  let hoddie = 0;
  let sweater = 0;

  for (const product of db.products) {
    let category = product.category;
    if (category === "shirt") {
      shirt++;
    } else if (category === "hoddie") {
      hoddie++;
    } else if (category === "sweater") {
      sweater++;
    }
  }

  let html = `<div class="filter " data-filter="all">
      <p>Show all</p>
      <p>Show all products</p>
    </div>
    <div class= "filter" data-filter=".shirt">
      <p>shirt</p> 
      <p>${shirt} products</p>
    </div>
      <div class= "filter" data-filter=".hoddie">
        <p>hoddie</p>
        <p>${hoddie} products</p>
      </div>
    <div class= "filter" data-filter=".sweater">
      <p>sweater</p>
      <p>${sweater} products</p>
    </div> `;

  printHabldeMixtupHTML.innerHTML = html;
}
export function handleMixtup() {
  mixitup(".products", {
    selectors: {
      target: ".product",
    },
    animation: {
      duration: 300,
    },
  });
}
export function handleShowCart() {
  const iconCartHTML = document.querySelector(".bx-shopping-bag");
  const cartHTML = document.querySelector(".cart");

  iconCartHTML.addEventListener("click", function () {
    cartHTML.classList.toggle("cart__show");
  });
}
export function handleProductsInCart(db) {
  const cartProducts = document.querySelector(".cart__products");

  cartProducts.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-plus")) {
      const id = Number(e.target.parentElement.id);

      const productFind = db.products.find((product) => product.id === id);

      if (productFind.quantity === db.cart[productFind.id].amount)
        return alert("Ya no tenemos más stock");
      db.cart[id].amount++;
    }

    if (e.target.classList.contains("bx-minus")) {
      const id = Number(e.target.parentElement.id);
      if (db.cart[id].amount === 1) {
        const response = confirm("Estas seguro?");
        if (!response) return;
        delete db.cart[id];
      } else {
        db.cart[id].amount--;
      }
    }

    if (e.target.classList.contains("bx-trash")) {
      const id = Number(e.target.parentElement.id);
      delete db.cart[id];
    }
    window.localStorage.setItem("cart", JSON.stringify(db.cart));
    printProductsInCart(db);
    printTotal(db);
    handlePrintAmountProducts(db);
  });
}
export function handleTotal(db) {
  const btnBuy = document.querySelector(".btn__buy");
  btnBuy.addEventListener("click", function () {
    if (!Object.values(db.cart).length)
      return alert("Tienes que tener un producto. Para realizar una compra");
    const response = confirm("Seguro que quieres comprar?");
    if (!response) return;

    const currentProducts = [];

    for (const product of db.products) {
      const productCart = db.cart[product.id];
      if (product.id === productCart?.id) {
        currentProducts.push({
          ...product,
          quantity: product.quantity - productCart.amount,
        });
      } else {
        currentProducts.push(product);
      }
    }
    db.products = currentProducts;
    db.cart = {};
    window.localStorage.setItem("products", JSON.stringify(db.products));
    window.localStorage.setItem("cart", JSON.stringify(db.cart));
    printTotal(db);
    printProductsInCart(db);
    printProducts(db);
    window.location.reload();
  });
}
export function handlePrintAmountProducts(db) {
  const amountProducts = document.querySelector(".amountProducts");

  let amount = 0;
  for (const product in db.cart) {
    amount += db.cart[product].amount;
  }
  amountProducts.textContent = amount;
}

export function addToCartFromProdcuts(db) {
  const productHTML = document.querySelector(".products");
  productHTML.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-plus")) {
      const id = Number(e.target.id);

      const productFind = db.products.find((product) => product.id === id);

      if (db.cart[productFind.id]) {
        if (productFind.quantity === db.cart[productFind.id].amount)
          return alert("Ya no tenemos más stock");
        db.cart[productFind.id].amount++;
      } else {
        db.cart[productFind.id] = { ...productFind, amount: 1 };
      }

      window.localStorage.setItem("cart", JSON.stringify(db.cart));
      printProductsInCart(db);
      printTotal(db);
      handlePrintAmountProducts(db);
    }
  });
}

export function AddProductForModal(db) {
  const productHTML = document.querySelector(".ModalProduct");
  productHTML.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-plus")) {
      const id = Number(e.target.id);
      console.log(id);
      const productFind = db.products.find((product) => product.id === id);

      if (db.cart[productFind.id]) {
        if (productFind.quantity === db.cart[productFind.id].amount)
          return alert("Ya no tenemos más stock");
        db.cart[productFind.id].amount++;
      } else {
        db.cart[productFind.id] = { ...productFind, amount: 1 };
      }

      window.localStorage.setItem("cart", JSON.stringify(db.cart));
      printProductsInCart(db);
      printTotal(db);
      handlePrintAmountProducts(db);
    }
  });
}
