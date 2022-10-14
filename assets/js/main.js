// LOADER
const loadComponent = () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
}

// -------DARK MODE---------------
const themeIcon = document.getElementById("theme-btn")

themeIcon.addEventListener("click", () =>{
  document.body.classList.toggle("dark")

  if (themeIcon.classList.contains("bx-moon")){
    themeIcon.classList.replace("bx-moon", "bx-sun")
  }else{
    themeIcon.classList.replace("bx-sun", "bx-moon")
  }
})

// PRODUCTOS
const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  // MOSTRAR OCULTAR CARRITO
  const cart = document.getElementById("cart-container")
  const shopIcon = document.getElementById("cart-shop")
  const shopCloseIcon = document.getElementById
  ("close-cart")

 

  // MOSTRAR PRODUCTOS EN PÁGINA
const showProducts = () => {
  const productContainer = document.getElementById("products-list")

let fragment = ``

items.forEach(producto => {
  fragment += `
  <div class="product-card" id="${producto.id}">
    <img src="${producto.image}" alt="">
    <p>$${producto.price}</p>
    <p>Stock:${producto.quantity}</p>
    <p>${producto.name}</p>
    <button class="btn-add">ADD</button>
  </div>
  `
})

  productContainer.innerHTML = fragment

  cartFunctionality()
}

//AGREGAR PRODUCTOS AL CARRO
function cartFunctionality(){
  const btns=document.querySelectorAll(".btn-add")
  const cart = []
  btns.forEach(button => {
      button.addEventListener("click", e => {
          const id = parseInt(e.target.parentElement.id)
          const selectedProduct = items.find( item => item.id===id)
          
          let index = cart.indexOf(selectedProduct)
          if(index !== -1){
              if(cart[index].quantity<=cart[index].cantidad){
                  alert("no hay stock")
              }else{
                  cart[index].cantidad++
              }

            } else{
              selectedProduct.cantidad = 1
              cart.push(selectedProduct)
          }
          console.log(cart)
          showProducts(cart)
        })
  })
}

//SUMAR PRODUCTOS Y MOSTRARLOS EN EL CARRO
function showProductsInCart(cart){
 let total=0
 let contador=0
 const conPrincipal = document.querySelector(".con-items")
 const cartContainer = document.getElementById("id--carro")
 let fragmento= ``
 cart.forEach(producto => {
  fragmento+=`<div class="producto-select" id="${producto.id}">
  <img src="${producto.image}" alt="">
  <p>$${producto.price}</p>
    <p>Stock:${producto.cantidad}</p>
    <p>${producto.name}</p>
    </div>
   `
   contador+=producto.cantidad
   total+=producto.cantidad * producto.price
  
 })
console.log(total)
console.log(contador)
cartContainer.innerHTML = fragmento
conPrincipal.innerHTML = contador

}

  document.addEventListener("DOMContentLoaded", () => {
    loadComponent()
    showProducts()
  })

  shopIcon.addEventListener("click", () => {
    cart.classList.remove("hide")
  })

  shopCloseIcon.addEventListener("click", () => {
    cart.classList.add("hide")
  })

  