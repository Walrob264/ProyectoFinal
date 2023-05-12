export function darkmode() {
  const DARKMODEHTML = document.querySelector(".bx-moon");

  DARKMODEHTML.addEventListener("click", function () {
    const bodyDARKMODEHTML = document.querySelector("body");
    bodyDARKMODEHTML.classList.toggle("darkmode");
    const iconSunHTML = document.querySelector(".bx-moon");
    iconSunHTML.classList.toggle("bx-sun");

    if (bodyDARKMODEHTML.classList.contains("darkmode")) {
      localStorage.setItem("darkmode", "true");
    } else {
      localStorage.setItem("darkmode", "false");
    }
  });

  if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("darkmode");
    const iconSunHTML = document.querySelector(".bx-moon");
    iconSunHTML.classList.add("bx-sun");
  } else {
    document.body.classList.remove("darkmode");
  }
}

export function scrollNavbar() {
  window.addEventListener("scroll", function () {
    const headerHTML = document.querySelector("header");

    headerHTML.classList.toggle("header", window.scrollY > 0);
  });
}

export function handleLoading() {
  if (window.localStorage.getItem("products")) {
    const idLoad = document.querySelector("#Load");
    idLoad.classList.toggle("loading_finish");
    idLoad.addEventListener("transitionend", () => {
      idLoad.classList.remove("loading");
    });
  }
}
export function Loading() {
  if (window.localStorage.getItem("products")) {
    const idLoad = document.querySelector("#Load");
    idLoad.classList.toggle("loading_finish");
    idLoad.addEventListener("transitionend", () => {
      idLoad.classList.remove("loading");
    });
  }
}
export function colorTextNavbar() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const TextNavbProductHTMl = document.querySelector(".text_nav_products");
      const TextNavbHTMl = document.querySelector(".text_nav_home");
      if (entry.isIntersecting) {
        TextNavbHTMl.classList.add("Text_active");
        TextNavbProductHTMl.classList.remove("Text_active");
      } else {
        TextNavbHTMl.classList.remove("Text_active");
        TextNavbProductHTMl.classList.add("Text_active");
      }
    });
  });

  const HOMEHTML = document.querySelectorAll("#Home");

  HOMEHTML.forEach((Home) => {
    observer.observe(Home);
  });
}
