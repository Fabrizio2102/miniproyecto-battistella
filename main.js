const grande = document.querySelector(".grande")
const punto = document.querySelectorAll(".punto")
const barra = document.querySelectorAll(".barra")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const msg = document.getElementById("mensaje")
const enviar = document.getElementById("enviar")



const campos = {
    nombre: false,
    email: false,
    mensaje: false
}

enviar.addEventListener('click', ()=>{
    validar();
})

function validar(){
    if(nombre.value != ""){
        campos.nombre = true;
    }
    for(i=0; i<email.value.length; i++){
        if(email.value[i] == "@"){
            campos.email = true;
        }
    }
    if(msg.value != ""){
        campos.mensaje = true;
    }

    if(campos.nombre && campos.email && campos.mensaje){
        alert("Se ha enviado el mensaje.")
    }else{
        alert("ERROR. No se ha podido enviar el mensaje.")
    }
}


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

