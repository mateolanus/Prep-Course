// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  class Usuario {                                   //definí una class ES6 llamada Usuario
    constructor (opciones) {                        //dentro de la func constructora va el argumento 'opciones' (al principio no sabia donde iba)
      this.usuario = opciones.usuario;              //defino las props de la clase
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {                                     //defino la funcion de la clase
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }
  return Usuario;                                   // retorno la clase.
}

/* -- OTRA FORMA SERÍA:

  function Usuario (opciones) {                     DEFINO LA FUNC CONSTRUCTORA
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function(){           DEFINO EL PROTOTIPO
    return 'Hola, mi nombre es ' + this.nombre;
  } 
  return Usuario;
}
*/

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
    Constructor.prototype.saludar = function() {
    return 'Hello World!';
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringInvertida = '';                           //defino la var que sera la string invertida. inic es ' '
    for(var i = this.length - 1; i >= 0; i--) {         //creo un for que por cada vuelta sumara el caracter
    stringInvertida = stringInvertida + this.charAt(i); //encontrado con this.charAt(i). Las variables del for
    }                                                   //van en sentido opuesto (van desde la long del string -1  
    return stringInvertida;                             //así el charAt se ubica en la ultima letra, y luego
  }                                                     //i-- hasta que i es >=0
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio
    }
      detalle() {
        return {
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio,
        }
      
      }
    }

    /* ASI ESTA MALL. Porque luego de cada return se corta la ejecucion. Tengo que hacer un solo return y entre{}
    poner lo que debe retornar
    detalle() {
      return Nombre: this.nombre;
      return Apellido: this.apellido;
      return Edad: this.edad;
      return Domicilio: this.domicilio;
    }
  return Persona; */



function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
var persona1 = new Persona('Juan','Perez', 22, 'Saavedra 123');
return persona1; //devuelve el objeto creado
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {             //para agregar un metodo, puedo ir al codigo arriba 
    return this.nombre + ', ' + this.edad + ' años'; //y agregar el metodo ahi mismo, o puedo agregarlo aca 
  }                                                  //pero con la notacion del prototype. 
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
