var map = L.map('map').setView([4.6115, -74.0817], 12); // Coordenadas de Bogotá

// Agregar capa de mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

var localidades = {
    "2012": [
        { localidad: "Antonio Nariño", casos: 40, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 84, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 415, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 90, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 460, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 325, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 274, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 288, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 5, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 62, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 77, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 264, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 186, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 66, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 380, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 7, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 51, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 103, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 210, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 217, coords: [4.4844, -74.1232] }
    ],
    "2013": [
        { localidad: "Antonio Nariño", casos: 54, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 82, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 655, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 87, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 665, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 348, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 279, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 508, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 16, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 79, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 136, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 334, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 271, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 90, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 434, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 24, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 82, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 187, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 212, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 440, coords: [4.4844, -74.1232] }
    ],
    "2014": [
        { localidad: "Antonio Nariño", casos: 113, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 161, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 896, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 116, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 815, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 562, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 452, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 627, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 42, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 123, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 122, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 484, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 545, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 137, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 617, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 29, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 117, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 313, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 286, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 703, coords: [4.4844, -74.1232] }
    ],
    "2015": [
        { localidad: "Antonio Nariño", casos: 137, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 156, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 946, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 126, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1224, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 585, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 474, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 868, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 32, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 141, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 190, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 703, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 564, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 137, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 825, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 17, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 98, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 353, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 334, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 620, coords: [4.4844, -74.1232] }
    ],
    "2016": [
        { localidad: "Antonio Nariño", casos: 91, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 132, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 792, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 96, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1273, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 601, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 549, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 750, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 18, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 115, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 179, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 561, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 433, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 87, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 955, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 22, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 97, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 255, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 308, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 715, coords: [4.4844, -74.1232] }
    ],
    "2017": [
        { localidad: "Antonio Nariño", casos: 112, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 212, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 1266, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 129, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1267, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 769, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 580, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 1255, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 29, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 136, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 343, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 538, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 443, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 153, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 832, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 13, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 160, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 365, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 386, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 769, coords: [4.4844, -74.1232] }
    ],
    "2018": [
        { localidad: "Antonio Nariño", casos: 177, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 246, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 1447, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 165, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1383, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 965, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 613, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 1692, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 37, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 135, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 428, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 731, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 662, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 200, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 1016, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 25, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 219, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 459, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 539, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 991, coords: [4.4844, -74.1232] }
    ],
    "2019": [
        { localidad: "Antonio Nariño", casos: 182, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 166, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 1859, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 193, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1688, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 1000, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 736, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 2019, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 61, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 204, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 537, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 814, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 953, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 295, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 1166, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 29, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 226, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 565, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 470, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 1128, coords: [4.4844, -74.1232] }
    ],
    "2020": [
        { localidad: "Antonio Nariño", casos: 174, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 198, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 1657, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 194, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1296, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 1192, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 820, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 2151, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 63, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 201, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 547, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 694, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 768, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 250, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 1706, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 15, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 297, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 482, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 643, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 902, coords: [4.4844, -74.1232] }
    ],
    "2021": [
        { localidad: "Antonio Nariño", casos: 257, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 355, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 2209, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 349, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 1921, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 2075, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 1111, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 2953, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 69, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 273, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 718, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 1028, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 1092, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 340, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 3047, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 14, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 557, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 612, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 1276, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 1102, coords: [4.4844, -74.1232] }
    ],
    "2022": [
        { localidad: "Antonio Nariño", casos: 406, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 646, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 3431, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 619, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 2891, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 3263, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 1600, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 4492, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 151, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos:452, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 1112, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 1640, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 1851, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 716, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 4480, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 8, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 752, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 794, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 1916, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 1727, coords: [4.4844, -74.1232] }
    ],
    "2023": [
        { localidad: "Antonio Nariño", casos: 397, coords: [4.6102, -74.1037] },
        { localidad: "Barrios Unidos", casos: 720, coords: [4.6802, -74.0721] },
        { localidad: "Bosa", casos: 3682, coords: [4.6348, -74.1855] },
        { localidad: "Chapinero", casos: 622, coords: [4.6545, -74.0599] },
        { localidad: "Ciudad Bolívar", casos: 3470, coords: [4.4845, -74.1384] },
        { localidad: "Engativá", casos: 3633, coords: [4.6948, -74.1123] },
        { localidad: "Fontibón", casos: 1615, coords: [4.6789, -74.1463] },
        { localidad: "Kennedy", casos: 5049, coords: [4.6261, -74.1389] },
        { localidad: "La Candelaria", casos: 157, coords: [4.6040, -74.0712] },
        { localidad: "Los Mártires", casos: 504, coords: [4.6166, -74.0895] },
        { localidad: "Puente Aranda", casos: 1178, coords: [4.6167, -74.1211] },
        { localidad: "Rafael Uribe Uribe", casos: 1778, coords: [4.5610, -74.0987] },
        { localidad: "San Cristóbal", casos: 1922, coords: [4.5794, -74.0942] },
        { localidad: "Santa Fe", casos: 653, coords: [4.6097, -74.0817] },
        { localidad: "Suba", casos: 4905, coords: [4.7482, -74.1004] },
        { localidad: "Sumapaz", casos: 18, coords: [4.2104, -74.3426] },
        { localidad: "Teusaquillo", casos: 926, coords: [4.6439, -74.0788] },
        { localidad: "Tunjuelito", casos: 956, coords: [4.5604, -74.1384] },
        { localidad: "Usaquén", casos: 1854, coords: [4.7485, -74.0304] },
        { localidad: "Usme", casos: 2200, coords: [4.4844, -74.1232] }
    ]
};


// Función para actualizar el mapa de calor
function actualizarMapa(a) {
    // Limpiar el mapa de calor existente
    if (typeof heat !== 'undefined') {
        map.removeLayer(heat);
    }
    
    // Crear un nuevo array para las coordenadas
    var heatData = [];

    // Recoger datos del año seleccionado
    var datoslocal = localidades[a];
    for (var i = 0; i < datoslocal.length; i++) {
        var dato = datoslocal[i];
        heatData.push([dato.coords[0], dato.coords[1], dato.casos]); // [lat, lon, weight]
    }

    // Crear la capa de calor
    var heat = L.heatLayer(heatData, { radius: 25, blur: 15 }).addTo(map);
}

// Evento para manejar el cambio en el selector de año
document.getElementById('añoSelector').addEventListener('change', function() {
    var epocaSelec = this.value;
    actualizarMapa(epocaSelec); // Actualizar el mapa según el año seleccionado
});

// Inicializar el mapa con el primer año
actualizarMapa('2012');
