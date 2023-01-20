const color = document.getElementsByClassName('habilidades-item');
const boton = document.querySelector('#boton-habilidades');

let cambio = false;

boton.addEventListener('click',  () => {
    if(cambio == false){
    for (let i = 0; i < color.length; i++) {
        color[i].style.filter = 'none';
    }
    }
    cambio = true
    console.log(cambio);
});