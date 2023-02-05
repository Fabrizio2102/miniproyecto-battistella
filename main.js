const grande = document.querySelector(".grande")
const punto = document.querySelectorAll(".punto")
const barra = document.querySelectorAll(".barra")

const habilidades = {
    programacion: 88,
    velocidad: 21,
    experiencia: 50,
    ultimahora: 100
}

punto.forEach((cadaPunto, i)=> {

    punto[i].addEventListener('click', ()=>{

        let posicion = i;
        let operacion = posicion * -33.3;

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo');
        })

        punto[i].classList.add('activo')

    })
})

