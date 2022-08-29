// Menú

const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// Array de Listado de Productos

let productos = [
  {id: 1, nombre: "Batería Moura 12MVA 7", cantidad: 1, precio: 8000, img: 'img/item-moura-12-7-vrla.jpg'},
  {id: 2, nombre: "Batería Moura M22ED", cantidad: 1, precio: 25000, img: 'img/item-moura-m22ed.jpg'},
  {id: 3, nombre: "Batería Moura M22GD", cantidad: 1, precio: 27500, img: 'img/item-moura-m22gd.jpg'},
  {id: 4, nombre: "Batería Moura M26AD", cantidad: 1, precio: 32000, img: 'img/item-moura-m26ad.jpg'},
  {id: 5, nombre: "Batería Moura M30LD", cantidad: 1, precio: 35000, img: 'img/item-moura-m30ld.jpg'},
  {id: 6, nombre: "Aceite Total 5000", cantidad: 1, precio: 5000, img: 'img/item-total-5000.jpg'},
  {id: 7, nombre: "Aceite Total 7000", cantidad: 1, precio: 7500, img: 'img/item-total-7000.jpg'},
  {id: 8, nombre: "Aceite Total 9000", cantidad: 1, precio: 10000, img: 'img/item-total-9000.jpg'}
]

// Array de Productos en Carrito

let aux = localStorage.getItem('productosEnCarrito');
let productosEnCarrito;

if (!aux) {
  productosEnCarrito = [];
} else {
  productosEnCarrito = JSON.parse(aux);
  renderizarProductosEnCarro();
}

// --- FUNCIONES --- //

// Función Renderizar Productos

function renderizarProductos() {
  let aux = ''
  for (let i = 0; i < productos.length; i++) {
    aux = aux + `
        <div class="main__producto">
                  <img src=${productos[i].img} class="main__img alt="Producto">
                  <h3>${productos[i].nombre}</h3>
                  <p>$${productos[i].precio}</p>
                  <button onclick="anadirAlCarrito({nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})" class="main__btn">Añadir a Carrito</button>
                </div>
                `
  }
  
  document.getElementById('contenedor-productos').innerHTML = aux;
}

renderizarProductos();


// Función Añadir al Carrito

function anadirAlCarrito(objetoProducto) {
  productosEnCarrito.push(objetoProducto);
  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  renderizarProductosEnCarro();

  // Toastify añadido
  Toastify({
    text: 'Producto añadido',
    duration: 3000,
    gravity: 'bottom',
    position: 'center',
    style: {
      background: 'linear-gradient(to right, #0BAB64, #3BB78F)'


    }
  }).showToast();

}


// Función Renderizar Productos en Carrito

function renderizarProductosEnCarro() {
  let aux = ''
  for (let i = 0; i < productosEnCarrito.length; i++) {
    aux = aux + `
        <div>
                  <h5>${productosEnCarrito[i].nombre}</h5>
                  <p>$${productosEnCarrito[i].precio}</p>
                  <a onclick="borrarDelCarro(${i})" style="cursor:pointer"><img src="img/icono-eliminar-blanco.svg" alt=""></a>
                </div>
                `
  }
 
  document.getElementById('contenedor-carrito').innerHTML = aux;
}


// Función Borrar del Carrito

function borrarDelCarro(id){
  productosEnCarrito.splice(id, 1);

  localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  renderizarProductosEnCarro();
}


// -- Toastify -- //

/* function anadirAlCarrito(){
  Toastify({
    text: 'Probando toast!',
    duration: 3000,
  }).showToast();
} */

