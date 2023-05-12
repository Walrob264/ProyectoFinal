export function printProducts(db) {
  const productsHTML = document.querySelector(".products");
  let html = "";
  for (const product of db.products) {
    const buttonAdd = product.quantity
      ? `<i class='bx bx-plus' id="${product.id}"></i> `
      : `<span class= "soldOut">Sold out</span>`;
    html += `
        <div class="product  ${product.category}">
            <div class="product_img"> 
                <img src="${product.image}" alt="imagen"/>
            </div>
    
            <div class="product_info">
            <h4>$${product.price}.00| <span><b>Stock</b>: ${product.quantity}   ${buttonAdd}</span></h4>
    
            <p class="showModalProduct" id="${product.id}">${product.name}</p>
            
            </div>
        </div>
        `;
  }

  productsHTML.innerHTML = html;
}

export function printNavbar() {
  const NavbarHTML = document.querySelector(".Navbar");
  let html = `<a href="#Home" class="Navbar_logo" ><svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48.92 56.48"
      class="nav_logo-icon"
    >
      <title>Academlo Logo</title>
      <g>
        <g>
          <path
            d="M28.58,15.39H25.16L35.78,36H31.49L20.67,15.71,8.23,38.82H18.94l3-5.43h-3.4l-1.47,2.54h-4l2.69-5.09H25.85l4.28,8H40.67ZM17.23,28.21l3.57-6.6,3.57,6.6Z"
          ></path>
        </g>
      </g>
    </svg>
    <span>STORE</span></a>
    <ul class="navbar_menu" id="navbarMenu">
                        <li>
                            <a href="#Home" class="text_nav_home" >Home</a>
                        </li>
                        <li>
                            <a href="#products" class="text_nav_products">Products</a>
                        </li>
                    </ul>
    <div class="icons_navbar">
    <i class="bx bx-moon" id="iconTheme"></i>
    
      <i class="bx bx-shopping-bag">
        <span class="amountProducts"></span>
      </i>
      <i class="bx handleIconNavbar bxs-dashboard"></i>
      </div>
    
    `;

  NavbarHTML.innerHTML = html;
}

export function printHomePage() {
  const printHomePageHTML = document.querySelector(".Home_page");
  let html = `<div class="Home_body_page">
                <div class="Image_body_page">
                <div></div>
                <img src="	https://academlostorev1.netlify.app/images/sweater2.png" alt="sueter_negro">
                </div>
              </div>
              <div class="Text">
                <h2 class="title_home">New Sweatshirt COLLECTIONS 2022</h2>
                <p class="text_home">Latest arrival of the new Hanes Midweight Crewneck sweatshirt imported from the 2022 series, with a modern design.</p>
                <p class="price_home">$14.00</p>
                <a href="#products" class="home_body_btn">
                  show more
                </a>
              </div>`;
  printHomePageHTML.innerHTML = html;
}

export function printProductsInCart(db) {
  const cartProduts = document.querySelector(".cart__products");
  let html = "";
  for (const product in db.cart) {
    const { quantity, price, name, image, id, amount } = db.cart[product];
    html += ` 
        <div class="cart__product">
            <div class= "cart_product--img">
              <img src= "${image}" alt="imagen"/>
            </div>
            <div class= "cartproduct--body">
              <h4>${name} | ${price}.00 </h4>
              <p> Stock: ${quantity} </p>
    
              <div class="cart__product--body-op" id="${id}" >
              <span>${amount} unit</span>
              <i class='bx bx-plus'></i>
              <i class='bx bx-minus' ></i>
              <i class='bx bx-trash' ></i>
              </div>
    
            </div>
        </div>
          `;
  }
  cartProduts.innerHTML = html;
}

export function printTotal(db) {
  const infoTotal = document.querySelector(".info__total");
  const infoAmount = document.querySelector(".info__amount");

  let totalPrice = 0;
  let amountProducts = 0;

  for (const product in db.cart) {
    const { amount, price } = db.cart[product];
    totalPrice += price * amount;
    amountProducts += amount;
  }
  infoAmount.textContent = amountProducts + " units";
  infoTotal.textContent = "$" + totalPrice + ".00";
}
export function printFooter() {
  const printFooterHTML = document.querySelector(".content_footer");
  let html = `<div class="footer_info">
      <h3 class="footer_info-title">Our information</h3>
      <ul>
          <li><a href="#">Toluca - México</a></li>
      </ul>
    </div>
    
    <div class="footer_info">
      <h3 class="footer_info-title">About Us</h3>
      <ul>
          <li><a href="#">Support Center</a></li>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Copy Right</a></li>
      </ul>
    </div>
    
    <div class="footer_info">
      <h3 class="footer_info-title">Product</h3>
      <ul>
          <li><a href="#">Hoodies</a></li>
          <li><a href="#">Shirts</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Sweatshirts</a></li>
      </ul>
    </div>
    
    <div class="footer_info">
      <h3 class="footer_info-title">Social</h3>
      <ul class="footer_link-social">
          <li>
              <a href="#">
                  <i class="bx bxl-facebook"></i>
              </a>
          </li>
          <li>
              <a href="#">
                  <i class="bx bxl-twitter"></i>
              </a>
          </li>
          <li>
              <a href="#">
                  <i class="bx bxl-instagram"></i>
              </a>
          </li>
      </ul>
    </div>
    </section>
    
    
    `;

  printFooterHTML.innerHTML = html;
}

export function ModalProduct(db) {
  const ContentModalProductHTML = document.querySelector(".ModalProduct");
  const clickForModalHTML = document.querySelector(".products");
  const modalProductShow = document.querySelector(".ModalProduct");
  let html = "";

  clickForModalHTML.addEventListener("click", function (e) {
    if (e.target.classList.contains("showModalProduct")) {
      for (const product of db.products) {
        const buttonAdd = product.quantity
          ? `<i class='bx bx-plus' id="${product.id}"></i> `
          : `<span class= "soldOut">Sold out</span>`;
        if (Number(e.target.id) === product.id) {
          html = `
            <div class="contentProduct">
            <i class="bx bxs-x-circle closeModal"></i>
                <div class="contetProduct_img"> 
                    <img src="${product.image}" alt="imagen"/>
                </div>
                <h3 class="contentProduct_name" id="${product.id}">${product.name} - <span> ${product.category} </span></h3>
                <p class="ContentProduct_p">${product.description}</p>
        
                <div class="contentProduct_info">
                <h3>$${product.price}.00  ${buttonAdd}</h3> 
                <p>Stock : ${product.quantity}</p> 
                </div>
            </div>
            </div>
            </div>
            `;
          break;
        }
      }
      modalProductShow.classList.toggle("modalProduct__show");
      ContentModalProductHTML.innerHTML = html;
    }
  });
}

export function closeModal() {
  const CLOSEMODALHTML = document.querySelector(".ModalProduct");

  CLOSEMODALHTML.addEventListener("click", function (e) {
    if (e.target.classList.contains("closeModal")) {
      CLOSEMODALHTML.classList.remove("modalProduct__show");
    }
  });
}
