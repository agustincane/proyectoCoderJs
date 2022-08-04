// Array de Listado de Productos

let productos = [
  {id: 1, nombre: "Aceite Total 5000", cantidad: 1, precio: 5000, img: 'img/item-total-5000.jpg'},
  {id: 2, nombre: "Aceite Total 7000", cantidad: 1, precio: 7000, img: 'img/item-total-7000.jpg'},
  {id: 3, nombre: "Aceite Total 9000", cantidad: 1, precio: 9000, img: 'img/item-total-9000.jpg'},
  {id: 4, nombre: "Aceite Total 7000", cantidad: 1, precio: 5000, img: 'img/item-total-7000.jpg'},
  {id: 5, nombre: "Aceite Total 5000", cantidad: 1, precio: 5000, img: 'img/item-total-5000.jpg'},
  {id: 6, nombre: "Aceite Total 7000", cantidad: 1, precio: 7000, img: 'img/item-total-7000.jpg'},
  {id: 7, nombre: "Aceite Total 9000", cantidad: 1, precio: 9000, img: 'img/item-total-9000.jpg'},
  {id: 8, nombre: "Aceite Total 7000", cantidad: 1, precio: 5000, img: 'img/item-total-7000.jpg'},
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

