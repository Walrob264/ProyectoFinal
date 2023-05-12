export async function getProducts() {
  try {
    const data = await fetch(
      "https://ecommercebackend.fundamentos-29.repl.co/"
    );
    const res = await data.json();

    window.localStorage.setItem("products", JSON.stringify(res));
    return res;
  } catch (error) {
    console.log(error);
  }
}
