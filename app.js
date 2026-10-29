
const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const mensaje = document.getElementById("mensaje");
const listaNotas = document.getElementById("lista-notas");

let notas = [];
let notaEliminada = null;

function mostrarMensaje(texto, tipo = "exito") {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}

function mostrarNotas() {
  listaNotas.replaceChildren();

  if (notas.length === 0) {
    const texto = document.createElement("p");
    texto.textContent = "Todavía no tienes notas guardadas.";
    listaNotas.appendChild(texto);
    return;
  }

  notas.forEach(function (nota) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "nota";

    const encabezado = document.createElement("h3");
    encabezado.textContent = nota.titulo;

    const texto = document.createElement("p");
    texto.textContent = nota.contenido;

    const acciones = document.createElement("div");
    acciones.className = "acciones-nota";

    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", function () {
      titulo.value = nota.titulo;
      contenido.value = nota.contenido;
      notas = notas.filter(function (item) {
        return item.id !== nota.id;
      });
      mostrarNotas();
      mostrarMensaje("Edita la nota y pulsa Agregar nota para guardar los cambios.");
      titulo.focus();
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "eliminar";
    botonEliminar.addEventListener("click", function () {
      const confirmar = confirm("¿Quieres eliminar esta nota? Podrás deshacer esta acción.");

      if (!confirmar) {
        mostrarMensaje("Eliminación cancelada.", "error");
        return;
      }

      notaEliminada = nota;
      notas = notas.filter(function (item) {
        return item.id !== nota.id;
      });

      mostrarNotas();
      mostrarMensaje("Nota eliminada. Puedes deshacer esta acción.");

      let botonDeshacer = document.createElement("button");
      botonDeshacer.textContent = "Deshacer eliminación";
      botonDeshacer.addEventListener("click", function () {
        if (notaEliminada) {
          notas.push(notaEliminada);
          notaEliminada = null;
          mostrarNotas();
          mostrarMensaje("Eliminación deshecha.");
          botonDeshacer.remove();
        }
      });

      mensaje.appendChild(document.createTextNode(" "));
      mensaje.appendChild(botonDeshacer);
    });

    acciones.appendChild(botonEditar);
    acciones.appendChild(botonEliminar);
    tarjeta.appendChild(encabezado);
    tarjeta.appendChild(texto);
    tarjeta.appendChild(acciones);
    listaNotas.appendChild(tarjeta);
  });
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoTitulo = titulo.value.trim();
  const textoContenido = contenido.value.trim();

  if (!textoTitulo || !textoContenido) {
    mostrarMensaje("Escribe un título y contenido antes de guardar.", "error");

    if (!textoTitulo) {
      titulo.focus();
    } else {
      contenido.focus();
    }

    return;
  }

  notas.push({
    id: Date.now(),
    titulo: textoTitulo,
    contenido: textoContenido
  });

  formulario.reset();
  mostrarNotas();
  mostrarMensaje("Nota agregada correctamente.");
  titulo.focus();
});

mostrarNotas();
