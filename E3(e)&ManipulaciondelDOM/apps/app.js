const boton = document.getElementById("boton");
const tituloPizza = document.getElementById("nombrePizza");
const ingredientesPizza = document.getElementById("ingredientesPizza")
const precioPizza = document.getElementById("precioPizza");
const error1 = document.getElementById("error");
const inputNum = document.getElementById("numberFilter");
const pizzas = [
  {
    id: 1,
    nombre: "Promo",
    ingredientes: ["Salsa", "Mozzarella", "Jamon", "Morron"],
    precio: 590,
  },
  {
    id: 2,
    nombre: "4 Quesos",
    ingredientes: ["Salsa", "Mozzarella", "Roquefort", "Parmesano", "Tybo"],
    precio: 1000,
  },
  {
    id: 3,
    nombre: "Pollo",
    ingredientes: ["Salsa", "Mozzarella", "Pollo", "Crema"],
    precio: 970,
  },
  {
    id: 4,
    nombre: "Tropical",
    ingredientes: ["Salsa", "Mozzarella", "Jamon", "Cerezas", "Anana"],
    precio: 1050,
  },
  {
    id: 5,
    nombre: "Puerro",
    ingredientes: ["Salsa", "Mozzarella", "Oregano"],
    precio: 950,
  },
  {
    id: 6,
    nombre: "Roquefort",
    ingredientes: ["Salsa", "Mozzarella", "Roquefort"],
    precio: 1200,
  },
];

function buscadorPizzas() {
  const value1 = parseInt(inputNum.value);
  pizzas.forEach((pizzas) => {
    if (value1 === pizzas.id) {
      tituloPizza.innerHTML = pizzas.nombre;
      ingredientesPizza.innerHTML = pizzas.ingredientes;
      precioPizza.innerHTML = "$" + pizzas.precio;
      error1.innerHTML = "";
    } else if (value1 > 5 || value1 <=0 ) {
      error1.innerHTML = "Articulo no encontrado, ingrese un numero del 1 al 6 ";
      ingredientesPizza.innerHTML = "";
      tituloPizza.innerHTML = "";
      precioPizza.innerHTML = "";
    }
  });
}

boton.addEventListener("click", buscadorPizzas);
