// Seleccioné correctamente el formulario usando la clase que ya tenía en el HTML.
var formulario = document.querySelector(".formulario");

// Usé preventDefault para que el formulario no recargue la página al hacer submit.
formulario.onsubmit = function (evento) {
  evento.preventDefault();

  // Aquí obtengo los valores del formulario (nombre, edad y nacionalidad).
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadInput = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var nacionalidad = nacionalidadInput.options[nacionalidadInput.selectedIndex].value;

  // Solo para revisar en consola si se están capturando bien los datos.
  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validación: si el nombre está vacío, le pongo clase de error.
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }

  // Validación de edad mínima y máxima.
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  // Si los datos están bien, llamo a la función para agregar el invitado.
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Esta función agrega un nuevo invitado a la lista.
function agregarInvitado(nombre, edad, nacionalidad) {
  // Convertí los valores del select en palabras completas.
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  // Tomo el contenedor donde se va a agregar la info.
  var lista = document.getElementById("lista-de-invitados");

  // Creo el div del invitado y le pongo una clase que ya estaba definida en CSS.
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Función para crear campos de tipo "Nombre: Arath"
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var br = document.createElement("br");

    span.textContent = descripcion + ": ";
    input.value = valor;

    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(br);
  }

  // Creo los 3 campos con esta función.
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Agrego el botón para eliminar el bloque del invitado.
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";

  var corteLinea = document.createElement("br");

  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Al hacer clic en el botón, se borra todo el bloque.
  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove();
  };
}
