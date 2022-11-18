const categorias = [
    {   cat_Nombre:"Blusa", item:[
        { imagen:"./images/mujer/b13.jpg", id:0, descuento:10, nombre:"Blusa Ray", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mujer/b12.jpg", id:1, descuento:15, nombre:"Blusa Pink", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mujer/b11.jpg", id:2, descuento:5, nombre:"Blusa Tep", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mujer/b10.jpg", id:3, descuento:20, nombre:"Blusa Bery", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mujer/b09.jpg", id:4, descuento:20, nombre:"Blusa Rady", subPrecio:32.99, totalPrecio:45.99 },
    ]},{cat_Nombre:"vestidos",item:[
        { imagen:"../images/ve1.jpeg", id:0, descuento:10, nombre:"Dress Ray", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/ve2.jpeg", id:1, descuento:15, nombre:"Vest Rae", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/ve3.jpeg", id:2, descuento:5, nombre:"Vest Tep", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/ve4.jpeg", id:3, descuento:20, nombre:"Vest Bery", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/ve4.jpeg", id:4, descuento:20, nombre:"Dress Rady", subPrecio:32.99, totalPrecio:45.99 },
    ]},{cat_Nombre:"jeans",item:[
        { imagen:"../images/mu1.jpeg", id:0, descuento:10, nombre:"Jean Ray", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mu2.jpeg", id:1, descuento:15, nombre:"Jean Park", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mu3.jpeg", id:2, descuento:5, nombre:"Jean Tep", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mu4.jpeg", id:3, descuento:20, nombre:"Jean Bery", subPrecio:32.99, totalPrecio:45.99 },
        { imagen:"../images/mu1.jpeg", id:4, descuento:20, nombre:"Jean Rady", subPrecio:32.99, totalPrecio:45.99 },
    ]}
]

let carrito=[];
function añadirCarrito(cat,prod){
    //Buscar los datos con recibids del html en la base de datos
    for (let i = 0; i < categorias.length; i++) {
        if(cat== i){
           for (let j = 0; j < categorias[i].item.length; j++) {
            if(prod== j){
            var item= categorias[i].item[j];
            break;
           }
        }
        }
    }
    //Buscar los datos dentro del carrito
    console.log(item)
    console.log(categorias[cat].item[prod])
    let itemEnCarrito = carrito.find(item => item.id === categorias[cat].item[prod].id);
    
    if(itemEnCarrito){
        itemEnCarrito.cantidad++;
        Swal.fire({
            icon: 'success',
            title: 'PRODUCTO AGREGADO',
            text: `La cantidad del producto ${itemEnCarrito.nombre} fue modificada`,
            showConfirmButton: false,
            timer: 1500
        });
    }else {
        carrito.push({...item,
                                cantidad:1
                            });
        Swal.fire({
            icon: 'success',
            title: 'PRODUCTO AGREGADO',
            text:'Producto agregado correctamente al carrito',
            showConfirmButton: false,
            timer: 1500
                        });

    }
    mostrarCarrito();
}

function mostrarCarrito(){

    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carrito.forEach((p, index)=> {
    
        let producto = document.createElement('div');
        //producto.classList.add('card');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        
        <div class="card-image" style="width: 18rem;">
            <img class="card-img-top" src="${p.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>S/${p.subPrecio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger" >Eliminar</button>
            </div>
        </div>
        `

        producto.querySelector('button').addEventListener('click', (event)=>{
            event.stopPropagation();
            if (event.target.classList.contains('btn-danger')) {
                        eliminarProductoDelCarrito(index);
            }
        })

        carritoHTML.appendChild(producto);
    })
    calcularTotal();



}
function eliminarProductoDelCarrito(indice){
    
    carrito[indice].cantidad--;

    if(carrito[indice].cantidad === 0){

        carrito.splice(indice,1);

        // Swal.fire(
        //     'PRODUCTO ELIMINADO',
        //     'El producto fue eliminado del carrito',
        //     'success'
        //   );
        
    }
    mostrarCarrito();
}

function calcularTotal(){

    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalCompra = carrito.reduce((acc, p) => acc + ((p.subPrecio - (p.subPrecio*(p.descuento)/100)) * p.cantidad), 0);

pintarTotalesCarrito(totalCantidad, totalCompra);

}

function pintarTotalesCarrito(totalCantidad, totalCompra){

const t = document.getElementById('pago');
const ft = document.getElementById('canombre');

t.innerHTML = `${totalCompra.toFixed(2)}`;
ft.innerHTML = `${totalCantidad}`;

}