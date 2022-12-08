const fetchData = (url_api) => {
    // Define una nueva promesa
    return new Promise((resolve, reject) => {
        // Crea un nuevo objeto XMLHttpRequest para realizar la petición
        const xhttp = new XMLHttpRequest();
        // Configura la petición para usar el método 'GET' y la URL especificada en el parámetro 'url_api'
        xhttp.open('GET', url_api, true);
        // Define la función a ejecutar cuando cambie el estado de la petición
        xhttp.onreadystatechange = (() => {
            // Si la petición ha sido completada (readyState === 4)
            if(xhttp.readyState === 4){
            // Si el servidor respondió con un código de estado '200' (OK)
                (xhttp.status === 200)
                // Resuelve la promesa con el texto de la respuesta parseado como un objeto JSON
                ? resolve(JSON.parse(xhttp.responseText))
                // Rechaza la promesa con un mensaje de error indicando el URL solicitado
                : reject(new Error('Error ', url_api))
            }
        });
        // Envía la petición
        xhttp.send();
    });
}

const API = 'https://weatherservices.herokuapp.com/api/';
const API_Clima = 'weather/';
const API_Locacion = 'locations/4852';

let contenedor = document.getElementById('container__clima');
let temperatura = document.getElementById('container__clima-temperatura');
let ubicacion = document.getElementById('container__clima-ubicacion')
let otrosParametros = document.getElementById('container__clima-parametros');
let descripcionDia1 = document.getElementById('parrafo-dia1');
let descripcionDia2 = document.getElementById('parrafo-dia2');
let descripcionDia3 = document.getElementById('parrafo-dia3');


fetchData(API + API_Clima)
    .then (data =>{
        temperatura.append(data.items[0].weather.tempDesc);
        otrosParametros.append('Humedad: ' + data.items[0].weather.humidity + '% ' + 'Viento: ' + data.items[0].weather.wind_speed + ' km/h, ' + data.items[0].weather.wing_deg);
        descripcionDia1.append('Mañana: '+ data.items[0].forecast.forecast[0].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[0].afternoon.description);
        descripcionDia2.append('Mañana: '+ data.items[0].forecast.forecast[1].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[1].afternoon.description);
        descripcionDia3.append('Mañana: '+ data.items[0].forecast.forecast[2].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[2].afternoon.description);
        return fetchData(API + API_Locacion);
    })
    .then (data => {
        ubicacion.append(data.location.name + ', ' + data.location.province);
    })
