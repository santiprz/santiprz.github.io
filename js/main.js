const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none"; // Oculta el botón de abrir
    cerrar.style.display = "block"; // Muestra el botón de cerrar
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.style.display = "none"; // Oculta el botón de cerrar
    abrir.style.display = "block"; // Muestra el botón de abrir
});
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.style.display = "none"; // Oculta el botón de abrir
    cerrar.style.display = "block"; // Muestra el botón de cerrar
    navList.classList.add("no-divider"); // Agrega la clase para eliminar las líneas divisorias
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    cerrar.style.display = "none"; // Oculta el botón de cerrar
    abrir.style.display = "block"; // Muestra el botón de abrir
    navList.classList.remove("no-divider"); // Quita la clase para restaurar las líneas divisorias
});
