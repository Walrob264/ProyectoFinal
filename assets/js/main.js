import {
  HandleMenu,
  PrintHandleMixtup,
  handleMixtup,
  handleShowCart,
  handleProductsInCart,
  handleTotal,
  handlePrintAmountProducts,
  addToCartFromProdcuts,
  AddProductForModal,
} from "./helpers/index.js";

import {
  printProducts,
  printNavbar,
  printHomePage,
  printProductsInCart,
  printTotal,
  printFooter,
  ModalProduct,
  closeModal,
} from "./Prints/index.js";

import {
  darkmode,
  scrollNavbar,
  Loading,
  colorTextNavbar,
} from "./interective/index.js";
import { getProducts } from "./GET/index.js";

async function main() {
  const db = {
    products:
      JSON.parse(window.localStorage.getItem("products")) ||
      (await getProducts()),
    cart: JSON.parse(window.localStorage.getItem("cart")) || {},
  };
  printNavbar();
  printHomePage();
  printProducts(db);
  PrintHandleMixtup(db);
  handleMixtup();
  handleShowCart();
  addToCartFromProdcuts(db);
  printProductsInCart(db);
  handleProductsInCart(db);
  printTotal(db);
  handleTotal(db);
  handlePrintAmountProducts(db);
  printFooter();
  darkmode();
  HandleMenu();
  scrollNavbar();
  ModalProduct(db);
  AddProductForModal(db);
  closeModal();
  Loading();
  colorTextNavbar();
}

main();
