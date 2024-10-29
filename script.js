function mostrarSeccion() {
    const contentContainer = document.getElementById("imagenSeleccionada"); // Cambié el id del contenedor por "imagenSeleccionada" para reutilizar el HTML.
    const seleccion = document.getElementById("menuDesplegable").value;

    // Limpia el contenido actual del contenedor
    contentContainer.innerHTML = "";

    // Carga la sección seleccionada si hay una opción válida
    if (seleccion) {
        const contenido = document.createElement("div");
        if (seleccion === "integrantes") {
            contenido.innerHTML = `
                <h2>Integrantes</h2>
                <ul>
                    <li>Juan Camilo Barragán Ballen</li>
                    <li>Daniel Felipe Godoy Linares</li>
                    <li>María Camila Guagueta Orozco</li>
                    <li>Juan Diego Peña Guerrero</li>
                </ul>
            `;
        } else if (seleccion === "introduccion") {
            contenido.innerHTML = `
                <h2>Introducción</h2>
                <p>Ya habiendo explorado ciertos algoritmos de aprendizaje automático supervisados, es momento de aplicar uno de los métodos más efectivos y sencillos: la regresión logística. En la implementación de este método, utilizaremos varias librerías de Python, como pandas y scikit-learn, para construir un modelo de clasificación.</p>
            `;
        }
        
        contentContainer.appendChild(contenido);
    }
}

function irHome() {
    // Restablece el menú desplegable a la opción inicial y limpia la sección
    document.getElementById("menuDesplegable").selectedIndex = 0;
    mostrarSeccion(); // Limpia el contenido mostrado
}
