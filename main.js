const color = document.getElementsByClassName('habilidades-item');
const boton = document.querySelector('#boton-habilidades');
const barra = document.getElementById('barra')
const barra_lista = document.getElementById('barra-lista');

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

window.addEventListener('scroll', () =>{
    barra.classList.toggle('barra-scroll', window.scrollY > 680);
} )

function funcion(){
    if(barra_lista.classList.value === '')
        barra_lista.classList.value = 'barra-click'
    else
        barra_lista.classList.value = ''
}