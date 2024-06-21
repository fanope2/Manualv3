window.addEventListener('load', ()=>{
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById("usuario")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const pasConfirma = document.getElementById('passConfirma')

    form.addEventListener("submit", (e)=>{    
    })

    const validaCampos = ()=>{
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmarValor = passConfirma.value.trim();

        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
       if(!usuarioValor){
           // console.log('CAMPO VACIO')
            validaFalla(usuario, "Campo vacío")
        }else{
            validaOk(usuario)
        }   

        //validando campo email
        if(!emailValor){
            validaFalla(email, "Campo vacío")
        }else if(!validaEmail(emailValor)){
            validaFalla(email, "El email no es válido")
        }else {
            validaOk(email)
        }
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/

        // validando el campo password
        if (!passValor){
            validaFalla(pass, "Campo vacío")
        }else if(passValor.length < 8){
            validaFalla(pass, "La contraseña debe tener al menos 8 caracteres")
        }else if(!passValor.match(er)){
            validaFalla(pass, "La contraseña debe tener almenos un may., una min. y un núm.")
        }else {
            validaOk(pass)
        }
    }

const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = msje

    formControl.className = "form-control falla";
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = "form-control ok"

}
const validaEmail =(email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.]))^/
}

})