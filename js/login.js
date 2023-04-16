let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo");
let logoSpan = document.querySelectorAll(".logo-parts");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (span + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

const inputs = document.querySelectorAll(".input");

function add() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function rem() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", add);
  input.addEventListener("blur", rem);
});

// defivinr las variables que almacena a los usuarios

var usuario = document.querySelector('input[type="text]');
var clave = document.querySelector('input[type="password"]');

// definir arrays para los usuarios y sus contraseñas

var usuarios = ["Claudia", "Rodrigo", "Hades", "Adrian"];
var claves = ["admin1", "admin2", "admin3", "admin4"];

function cargar(frm) {
  var usu = frm.txtusuario.value;
  let i = -1;

  for (let j = 0; j < usuarios.length; j++) {
    if (usuarios[j] == usu) {
      i = j;
      break;
    }
  }

  if (i == -1) {
    window.event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Usuario no existe...",
      text: "Intente nuevamente",
    });
    return;
  }

  var clave = frm.txtclave.value;
  if (clave == claves[i]) {
    window.event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: "Estás en tu casa " + usu,
      showConfirmButton: true,

      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "SALÓN DE TOMORI/INICIO/Inicio.html";
      }
    });
  } else {
    window.event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "La clave no existe",
      text: "Intente nuevamente",
    });
  }
}
