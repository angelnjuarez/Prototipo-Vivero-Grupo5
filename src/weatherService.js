const fetchData = require('./fetchData');
const API = 'https://weatherservices.herokuapp.com/api/';

let ubicacion;
let name;
let province;

fetchData(API + 'locations/4852')
    .then (data =>{
        //lista de estados del clima
        console.log(data.location.name);
/*         province = data[0].province;
        ubicacion = data[0].state_id; */
        return fetchData(`${API}`+ 'weather/')
    })
    .then (data => {
        console.log(data.items[0].forecast.forecast[1].morning.description)
    })

    /* console.log(ubicacion)
 */