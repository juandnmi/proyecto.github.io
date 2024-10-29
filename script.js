function mostrarImagen() {
    // Oculta todas las imágenes
    const imagenes = document.querySelectorAll("#imagenes img");
    imagenes.forEach(imagen => imagen.classList.remove("imagen-visible"));

    // Muestra la imagen seleccionada en el menú
    const seleccion = document.getElementById("menuDesplegable").value;
    if (seleccion) {
        document.getElementById(seleccion).classList.add("imagen-visible");
    }
}
