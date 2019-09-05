const padre = document.querySelector("#padre"),
  botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    padre.style.background = boton.value;
  });
});

//DELEGACIÓN DE EVENTOS; Asignar los eventos a los padres.

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    //   padre.style.background = boton.value;
    console.log(boton.value);
  });
});

padre.addEventListener("click", e => {
  if (e.target.className === "boton") {
    console.log(e.target.value);
  }
});
