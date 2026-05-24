let carrito = [];

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre,
        precio
    });

    actualizarCarrito();

    mostrarNotificacion(nombre);

}

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");

    const contador = document.getElementById("contador-carrito");

    const total = document.getElementById("total");

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach((producto) => {

        suma += producto.precio;

        lista.innerHTML += `

            <div class="producto-carrito">

                <p>${producto.nombre}</p>

                <span>S/ ${producto.precio}</span>

            </div>

        `;

    });

    contador.innerText = carrito.length;

    total.innerText = suma;

}

function abrirCarrito(){

    document.getElementById("carrito").classList.add("activo");

}

function cerrarCarrito(){

    document.getElementById("carrito").classList.remove("activo");

}

function mostrarNotificacion(nombre){

    const notificacion = document.createElement("div");

    notificacion.classList.add("popup-notificacion");

    notificacion.innerHTML = `

        <div class="popup-contenido">

            <h3>JOEL Store dice</h3>

            <p>${nombre} agregado al carrito 🛒</p>

            <button onclick="cerrarPopup(this)">
                Aceptar
            </button>

        </div>

    `;

    document.body.appendChild(notificacion);

}

function cerrarPopup(boton){

    const popup = boton.parentElement.parentElement;

    popup.remove();

}