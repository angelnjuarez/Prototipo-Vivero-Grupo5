/* Cordenadas sucursal */
let mapa = L.map('map').setView([-34.522700, -58.702193],16);

/* Mapa, zoom y agregamos coordenadas */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mapa);

let marcador = L.marker([-34.522700, -58.702193]).addTo(mapa)
                .bindPopup('Sucursal Polvorines <br> Juan María Gutiérrez 985 <br> Lunes a viernes de 10 a 18 hs.')
                .openPopup();
