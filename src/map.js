/* Cordenadas sucursal */
let mapa = L.map('map').setView([-34.522700, -58.702193],16);

/* Mapa, zoom y agregamos coordenadas */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mapa);

let marcadorP = L.marker([-34.522700, -58.702193]).addTo(mapa)
                .bindPopup('Sucursal Polvorines <br> Juan María Gutiérrez 985 <br> Lunes a viernes de 10 a 18 hs.')
                .openPopup();

let marcadorS = L.marker([-34.53685102047739, -58.70617357375253]).addTo(mapa)
                .bindPopup('Sucursal San Miguel <br> Av. Dr. Ricardo Balbín 533 <br> Lunes a viernes de 10 a 18 hs.')
                .openPopup();

let marcadorB = L.marker([-34.544158454055435, -58.68765576743836]).addTo(mapa)
                .bindPopup('Sucursal Bella Vista <br> Pardo 141 <br> Lunes a viernes de 10 a 18 hs.')
                .openPopup();
