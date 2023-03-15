//inicio - saludo
let username = "Carlos"
function login() {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {

        let savedName = prompt("Ingresa aca tu Nombre. Tenes " + (i + 1) + " oportunidades. La primera letra debe contener Mayuscula sin excepción.");
        if (username === savedName) {
            alert(" Bienvenido Carlos a nuestra tienda.");
            ingresar = true;
            break;

        } else {



        }

    }

    return ingresar;

}


//lista de productos 
if (login()) {
    class Producto {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }


        Datos() {
            console.log("Nombre:", this.nombre);
            console.log("Precio:", this.precio);
            console.log("");

        }
    }

    let listaProductos = [];
    listaProductos.push(new Producto("Television", 150000));
    listaProductos.push(new Producto("Parlante", 10000));
    listaProductos.push(new Producto("Heladera", 100000));

    console.log("Lista de productos");
    console.log("")

    for (let producto of listaProductos) {
        producto.Datos();
    }

    //compra de producto
    function buscarProducto(producto) {
        return producto.nombre == compraUsuario
    }

    let compraUsuario = prompt("Ingresa el nombre del producto que deseas comprar")
    let resultado = listaProductos.find(buscarProducto)


    if (resultado != undefined) {
        console.log("Usted elegió el", resultado)
    } else {
        console.log("No se encontro el producto", compraUsuario);
    }
} else {
    alert("Has ingresado incorrectamente el nombre en 3 oportunidades.");


}

