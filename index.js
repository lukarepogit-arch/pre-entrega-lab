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
const [, , method,resource]=process.argv;

if (method.toUpperCase()=="GET" && resource.toLowerCase() == "products"){
    //listado de productos extraidos desde esta api
//    fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

// Forma de hacerco con promesa AWAIT 
//traimos con fetch   
const response= await fetch('https://fakestoreapi.com/products')
//transormamos en json
    const data = await response.json()
    console.log(data)};