// console.log(process.argv);

//Obetener el "metodo GET"
//con process.argv vemos y obtenemos un array
//ponemos el [2] porque a partir de ese indice
//es lo que vamos a obetener lo que escribamos en la consola
// const method =process.argv[2];
//Obetener el "products"
// const resource =process.argv[3];

// console.log(method,resource);
//Me aseguro que GET sea mayuscula y products Minuscula
// if (method.toUpperCase()=="GET" && resource.toLowerCase() == "products"){
//     console.log("obtener productos");
// }

// -- Haciendolo con desestructuracion

//ignoramos los dos primeros indices con el espacio entre "," que serian "node y start"     
// let [, , method,resource]=process.argv;


// method = method.toUpperCase();
// resource = resource.toLowerCase();



// const match = argv.find((arg)=>/^products\/\id+$/.test(arg));
// const id =match ? match.split("/")[1]: null;

// if( method == "GET" && id){

// }

//Metodos asincronos
// if (method=="GET" && resource== "products"){
    //listado de productos extraidos desde esta api
//    fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));


// Forma de hacerco con promesa AWAIT (asinscrono) 

//traemos con fetch   
// const response= await fetch('https://fakestoreapi.com/products'+ id)
//transformamos en json
    // const data = await response.json()
    // console.log(data)};

//Solo obtener la ruta de los productos:

// if(method == "GET" && resource.startsWith("products/")){
    // const params = resource.split("/")
    // console.log(params);

    //para tener solo el id de un producto
    // const [, id]= resource.split("/")
    //O esta opcion creamos una variable id y le decimos que traiga el elemeno 1 
    // let id= resource.split("/") [1];
    // id=parseInt(id);
    // validamos , si no es un numero o es menor o igual a 0 "no es un numero"
    // if(isNaN(id) || id <= 0){
    //     console.log("No es un numero");
    // }
    // const response= await fetch('https://fakestoreapi.com/products'+ id)
//transformamos en json
    // const data = await response.json()
    // console.log(data)
    
    // console.log(id);
    //npm start GET products/hola comando para arrancar la api
// };    

let [, , method,resource,...params]=process.argv;

method = method.toUpperCase();
resource = resource.toLowerCase();

//Crear ID:

if(method == "GET" && resource.startsWith("products")){
    let id = resource.split("/") [1];
    id = parseInt(id);

    if(isNaN(id) || id <= 0){
        console.log("No es un numero");
    }
    fetch('https://fakestoreapi.com/products/' + id)
        .then(response => response.json())
        .then(data => console.log(data));

if (method == "GET" && resource.startsWith("products/")){
    const response= await fetch('https://fakestoreapi.com/products/')
    const data = await response.json()
    console.log(data)
    }        
}

//Metodo POST

if(method == "POST" && resource=="products"){
    // const product = { 
    //     title: process.argv[4], 
    //     price: process.argv[5] , 
    //     category: process.argv[6]};

    const [title, price, category]=params;
    const product={
        title,
        price,
        category
    }
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => console.log(data));
}

//Metodo PUT 
if(method == "PUT" && resource.startsWith("products")){
    let id = resource.split("/") [1];
    id = parseInt(id);

    const [title, price, category]=params;
    const product={
        title,
        price,
        category
    }
    fetch('https://fakestoreapi.com/products/' + id, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => console.log(data));

}



//Metodo DELETE

if(method == "DELETE" && resource.startsWith("products/")){
    const id = parseInt(resource.split("/")[1]);


    fetch('https://fakestoreapi.com/products/'+ id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

