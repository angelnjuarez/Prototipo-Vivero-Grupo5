let familias = [
    {
        nombre: 'Glicinia',
        nombreCientifico: 'Wisteria sinensis',
        src: '../img/glicinia.jpg'
    },
    {
        nombre: 'Tronco de Brasil',
        nombreCientifico: 'Dracaena fragrans',
        src: '../img/troncoDeBrasil.jpg'
    },
    {
        nombre: 'Palmera',
        nombreCientifico: 'Roystonea regia',
        src: '../img/palmera.jpg'
    },
];

let galeria = document.getElementById('galery__container');

for (let i=0;i<familias.length;i++){
    let contenedorImg = document.createElement('div');
    let imagenPlanta = document.createElement('img');
    let textoPlanta = document.createElement('h2');

    textoPlanta.append(familias[i].nombre);
    contenedorImg.setAttribute('class', 'galery__container-contentImg');
    imagenPlanta.setAttribute('src', familias[i].src);

    contenedorImg.appendChild(textoPlanta);
    contenedorImg.appendChild(imagenPlanta);
    galeria.appendChild(contenedorImg);
}

let opciones = document.getElementById('lista__familia');

for (let i=0; i<familias.length;i++){
    let opcion = document.createElement('option');
    opcion.setAttribute('value', familias[i].nombre);
    opciones.appendChild(opcion);
}

let agregar = document.getElementById('familia__agregar');
let clonLabel = document.getElementById('clone__container')

agregar.addEventListener('click', e =>{
    e.preventDefault();

    let porClonar = document.querySelector('.clonar')
    let clon = porClonar.cloneNode(true);

    clonLabel.appendChild(clon).classList.remove('clonar');
});
