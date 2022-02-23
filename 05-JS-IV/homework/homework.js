// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return 'Meow!';
    }
}
  return gato;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
    var obj = objetoMisterioso.numeroMisterioso * 5 ; //numeroMisterioso es una propiedad de objetoMisterioso
    return obj;                                        //creo una var que contenga el pdto entre 5* y el acceso 
                                                      // al val de la propiedad numeroMisterioso
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  objeto[unaPropiedad] = undefined;
 
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var usuario = {
  nombre: nombre,
  email: email,
  password: password,
}
return usuario;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario['email']) { //indica si hay algo en usuario['email']. NI mas ni menos. El nombre de la propiedad
    return true;          // SI VA entre '' porque sabemos que existe
  } else {
    return false;
  }
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) { //El nombre de la propiedad NO VA ENTRE '' porque queremos ver si existe.
    return true;          
  } else {
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código: //hay que ver si la el valor de la clave password del obt usuario
  
  if (usuario.password === password) { //conocemos la propiedad usuario.password y tenemos que compararla
    return true;                       // con password
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword; //se asume que la propiedad a la cual se le asigna el valor de nuevaPassword
  return usuario;                   //es a la propuedad usuario.password del ejercicio anterior
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo); //!!puedo combinar la el objeto.propiedad.push directamente
  return usuario;                  //para agregar un nuevo el al array (a la propiedad 'amigos')
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:


  for (i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;         //cada elemento 'usuarios[i]' del array 'usuarios' hace referencia a
  }                                       //cada objeto 'usuario' dentro del array
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
 
          //usuario.posts //'posts' es un array de objetos 'post' que a su vez es una  propiedad del objeto 'usuario'
          //posts = []; //array de objetos post
          //post.likes //'likes' es un entero propiedad del objeto 'post'

  var suma = 0;                                 //primero defino la var 'suma' iniciada en 0
  for (i = 0; i < usuario.posts.length; i++) {  //el ciclo for va de i hasta la long del array posts[]
    suma = suma + usuario.posts[i].likes;       //en cada ciclo, el val de'suma' toma su val anterior + el val de
                                                //la prop 'likes' de cada objeto 'posts[i]' del array 'usuarios'
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
                  //'producto' es un objeto que tiene las propiedades 'precio' y 'porcentajeDeDescuento',
                  //y el metodo 'calcularPrecioDescuento' que calcula el precio de descuento y el precio final.

    //'producto.precio' y 'producto.porcentajeDeDescuento' son propiedades del objeto 'producto'
    //'calcularPrecioDescuento' es una func met
    // var producto = {
    //    precio: 2,
    //    porcentajeDeDescuento: 0.10
    //    calcularPrecioDescuento: func (
    //     
    //    )
    // } 
 
  producto.calcularPrecioDescuento = function () {
    return producto.precio = producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  } 
  return producto;
}
 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
