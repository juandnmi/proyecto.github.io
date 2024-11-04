// Coordenadas de las localidades
const coordenadas = {
    Usaquen: { lat: 4.6884, lng: -74.0340 },
    Chapinero: { lat: 4.6112, lng: -74.0502 },
    SantaFe: { lat: 4.5981, lng: -74.0741 },
    SanCristobal: { lat: 4.5804, lng: -74.0990 },
    Usme: { lat: 4.5535, lng: -74.1532 },
    Tunjuelito: { lat: 4.6105, lng: -74.1361 },
    Bosa: { lat: 4.6092, lng: -74.1836 },
    Kennedy: { lat: 4.6085, lng: -74.1267 },
    Fontibon: { lat: 4.6574, lng: -74.1211 },
    Engativa: { lat: 4.6769, lng: -74.1213 },
    Suba: { lat: 4.6996, lng: -74.0906 },
    BarriosUnidos: { lat: 4.6524, lng: -74.0722 },
    Teusaquillo: { lat: 4.6549, lng: -74.0862 },
    LosMartires: { lat: 4.6100, lng: -74.0901 },
    AntonioNarino: { lat: 4.6052, lng: -74.1156 },
    PuenteAranda: { lat: 4.6355, lng: -74.1164 },
    LaCandelaria: { lat: 4.5981, lng: -74.0800 },
    RafaelUribeUribe: { lat: 4.5899, lng: -74.1075 },
    CiudadBolivar: { lat: 4.5880, lng: -74.1590 },
    Sumapaz: { lat: 4.5582, lng: -74.4067 }
};

const heatData = {}; // Objeto para almacenar los datos

// Funcion para agregar datos al mapa de calor
function agregarDatosHeatMap(anio, datos) {
    const localidades = datos.map(item => {
        const [nombre, casos] = item;
        const coordenada = coordenadas[nombre.replace(/\s+/g, '')]; // Ajuste de nombre

        if (coordenada) {
            return {
                lat: coordenada.lat,
                lng: coordenada.lng,
                cases: casos
            };
        }
        return null;
    }).filter(Boolean);

    heatData[anio] = localidades;
}

// Datos de los años y localidades
data = {
    2012: [['Usaquén', 143], ['Chapinero', 82], ['Santa Fe', 33], ['San Cristóbal', 102],
           ['Usme', 123], ['Tunjuelito', 49], ['Bosa', 219], ['Kennedy', 180], 
           ['Fontibón', 105], ['Engativá', 151], ['Suba', 172], ['Barrios Unidos', 76], 
           ['Teusaquillo', 49], ['Los Mártires', 31], ['Antonio Nariño', 24], 
           ['Puente Aranda', 52], ['La Candelaria', 4], ['Rafael Uribe Uribe', 116], 
           ['Ciudad Bolívar', 214], ['Sumapaz', 5]],
    2013: [['Usaquén', 132], ['Chapinero', 27], ['Santa Fe', 48], ['San Cristóbal', 131], 
           ['Usme', 172], ['Tunjuelito', 67], ['Bosa', 252], ['Kennedy', 268], 
           ['Fontibón', 87], ['Engativá', 153], ['Suba', 242], ['Barrios Unidos', 34], 
           ['Teusaquillo', 40], ['Los Mártires', 42], ['Antonio Nariño', 18], 
           ['Puente Aranda', 74], ['La Candelaria', 9], ['Rafael Uribe Uribe', 115], 
           ['Ciudad Bolívar', 273], ['Sumapaz', 4]],
    2014: [['Usaquén', 175], ['Chapinero', 74], ['Santa Fe', 59], ['San Cristóbal', 192], 
           ['Usme', 286], ['Tunjuelito', 140], ['Bosa', 335], ['Kennedy', 352], 
           ['Fontibón', 179], ['Engativá', 195], ['Suba', 305], ['Barrios Unidos', 96], 
           ['Teusaquillo', 79], ['Los Mártires', 54], ['Antonio Nariño', 44], 
           ['Puente Aranda', 67], ['La Candelaria', 23], ['Rafael Uribe Uribe', 201], 
           ['Ciudad Bolívar', 385], ['Sumapaz', 5]],
    2015: [['Usaquén', 207], ['Chapinero', 75], ['Santa Fe', 76], ['San Cristóbal', 211], 
           ['Usme', 229], ['Tunjuelito', 166], ['Bosa', 448], ['Kennedy', 441], 
           ['Fontibón', 191], ['Engativá', 112], ['Suba', 389], ['Barrios Unidos', 96], 
           ['Teusaquillo', 63], ['Los Mártires', 73], ['Antonio Nariño', 57], 
           ['Puente Aranda', 81], ['La Candelaria', 14], ['Rafael Uribe Uribe', 287], 
           ['Ciudad Bolívar', 524], ['Sumapaz', 2]],
    2016: [['Usaquén', 170], ['Chapinero', 48], ['Santa Fe', 43], ['San Cristóbal', 156], 
           ['Usme', 244], ['Tunjuelito', 84], ['Bosa', 354], ['Kennedy', 253], 
           ['Fontibón', 126], ['Engativá', 224], ['Suba', 383], ['Barrios Unidos', 72], 
           ['Teusaquillo', 44], ['Los Mártires', 52], ['Antonio Nariño', 33], 
           ['Puente Aranda', 74], ['La Candelaria', 10], ['Rafael Uribe Uribe', 206], 
           ['Ciudad Bolívar', 443], ['Sumapaz', 3]],
    2017: [['Usaquén', 223], ['Chapinero', 68], ['Santa Fe', 73], ['San Cristóbal', 201], 
           ['Usme', 294], ['Tunjuelito', 161], ['Bosa', 439], ['Kennedy', 515], 
           ['Fontibón', 232], ['Engativá', 383], ['Suba', 530], ['Barrios Unidos', 98], 
           ['Teusaquillo', 97], ['Los Mártires', 71], ['Antonio Nariño', 60], 
           ['Puente Aranda', 165], ['La Candelaria', 15], ['Rafael Uribe Uribe', 178], 
           ['Ciudad Bolívar', 534], ['Sumapaz', 3]],
    2018: [['Usaquén', 226], ['Chapinero', 64], ['Santa Fe', 81], ['San Cristóbal', 241], 
           ['Usme', 224], ['Tunjuelito', 117], ['Bosa', 354], ['Kennedy', 502], 
           ['Fontibón', 175], ['Engativá', 319], ['Suba', 383], ['Barrios Unidos', 64], 
           ['Teusaquillo', 77], ['Los Mártires', 57], ['Antonio Nariño', 69], 
           ['Puente Aranda', 119], ['La Candelaria', 22], ['Rafael Uribe Uribe', 222], 
           ['Ciudad Bolívar', 383], ['Sumapaz', 2]],
    2019: [['Usaquén', 150], ['Chapinero', 62], ['Santa Fe', 97], ['San Cristóbal', 385], 
           ['Usme', 327], ['Tunjuelito', 144], ['Bosa', 319], ['Kennedy', 517], 
           ['Fontibón', 169], ['Engativá', 219], ['Suba', 311], ['Barrios Unidos', 43], 
           ['Teusaquillo', 52], ['Los Mártires', 65], ['Antonio Nariño', 57], 
           ['Puente Aranda', 137], ['La Candelaria', 18], ['Rafael Uribe Uribe', 242], 
           ['Ciudad Bolívar', 455], ['Sumapaz', 3]],
    2020: [['Usaquén', 177], ['Chapinero', 55], ['Santa Fe', 79], ['San Cristóbal', 279], 
           ['Usme', 296], ['Tunjuelito', 144], ['Bosa', 396], ['Kennedy', 551], 
           ['Fontibón', 220], ['Engativá', 332], ['Suba', 484], ['Barrios Unidos', 52], 
           ['Teusaquillo', 67], ['Los Mártires', 56], ['Antonio Nariño', 58], 
           ['Puente Aranda', 152], ['La Candelaria', 25], ['Rafael Uribe Uribe', 226], 
           ['Ciudad Bolívar', 360], ['Sumapaz', 2]],
    2021: [['Usaquén', 460], ['Chapinero', 128], ['Santa Fe', 115], ['San Cristóbal', 318], 
           ['Usme', 312], ['Tunjuelito', 174], ['Bosa', 524], ['Kennedy', 675], 
           ['Fontibón', 235], ['Engativá', 608], ['Suba', 979], ['Barrios Unidos', 105], 
           ['Teusaquillo', 158], ['Los Mártires', 77], ['Antonio Nariño', 64], 
           ['Puente Aranda', 206], ['La Candelaria', 26], ['Rafael Uribe Uribe', 299], 
           ['Ciudad Bolívar', 608], ['Sumapaz', 3]],
    2022: [['Usaquén', 591], ['Chapinero', 178], ['Santa Fe', 168], ['San Cristóbal', 472], 
           ['Usme', 435], ['Tunjuelito', 206], ['Bosa', 784], ['Kennedy', 1010], 
           ['Fontibón', 323], ['Engativá', 843], ['Suba', 1304], ['Barrios Unidos', 183], 
           ['Teusaquillo', 210], ['Los Mártires', 106], ['Antonio Nariño', 98], 
           ['Puente Aranda', 226], ['La Candelaria', 35], ['Rafael Uribe Uribe', 417], 
           ['Ciudad Bolívar', 743]],
    2023: [['Usaquén', 479], ['Chapinero', 180], ['Santa Fe', 163], ['San Cristóbal', 466], 
           ['Usme', 488], ['Tunjuelito', 164], ['Bosa', 560], ['Kennedy', 942], 
           ['Fontibón', 294], ['Engativá', 640], ['Suba', 919], ['Barrios Unidos', 168], 
           ['Teusaquillo', 148], ['Los Mártires', 83], ['Antonio Nariño', 74], 
           ['Puente Aranda', 211], ['La Candelaria', 29], ['Rafael Uribe Uribe', 405], 
           ['Ciudad Bolívar', 731], ['Sumapaz', 1]],
};


// Crear una lista de años
const anios = [];
for (const a in data) {
    anios.push(a);
}

// Agregar los datos al objeto heatData
let cuenta = 0;
for (const dato in data) {
    agregarDatosHeatMap(anios[cuenta], data[anios[cuenta]]);
    cuenta++;
}

// Inicializacion del mapa
const map = L.map('map', {
    center: [4.60971, -74.08175],
    zoom: 12,
    minZoom: 10,
    maxZoom: 14,
    zoomControl: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const bounds = L.latLngBounds(L.latLng(4.389, -74.25), L.latLng(4.847, -73.911));
map.setMaxBounds(bounds);

// Funcion para actualizar el mapa de calor
let heatLayer = null;
function updateHeatMap(year) {
    if (heatLayer) {
        map.removeLayer(heatLayer);
    }

    const yearData = heatData[year];
    if (yearData) {
        const heatLayerData = yearData.map(d => [d.lat, d.lng, d.cases / 20]);
        heatLayer = L.heatLayer(heatLayerData, {
            radius: 25,
            blur: 20,
            maxZoom: 15
        }).addTo(map);
    }
}

// Inicializa el mapa con datos de 2012
updateHeatMap(2012);

// Evento para el cambio de año en el selector
document.getElementById('yearSelect').addEventListener('change', function() {
    const selectedYear = this.value;
    updateHeatMap(selectedYear);
});

