function mostrarImagen() {
    const imagenSeleccionada = document.getElementById("imagenSeleccionada");
    const seleccion = document.getElementById("menuDesplegable").value;

    // Limpia el contenido actual del contenedor de imagen
    imagenSeleccionada.innerHTML = "";

    // Carga la imagen seleccionada si hay una opción válida
    if (seleccion) {
        const img = document.createElement("img");
        img.src = seleccion === "imagen1" 
            ? "https://mexico.unir.net/wp-content/uploads/sites/6/2022/05/grafico-diagramas.jpg"
            : seleccion === "imagen2"
            ? "https://media.gq.com.mx/photos/5f6ce732bc946e88f6c96320/16:9/w_1600,c_limit/goky%20ultra%20instinto.jpg"
            : "https://media.istockphoto.com/id/959978484/es/foto/rojo-redondo-en-blanco-bot%C3%B3n-rojo.jpg?s=612x612&w=0&k=20&c=PMMi8GEH6csl0oD8QMBL9pLG3-UQQglYDJThK9eOATE=";

        imagenSeleccionada.appendChild(img);
    }
}

function irHome() {
    // Restablece el menú desplegable a la opción inicial y limpia la imagen
    document.getElementById("menuDesplegable").selectedIndex = 0; // Selecciona la opción "Selecciona una imagen"
    mostrarImagen(); // Limpia la imagen mostrada
}
