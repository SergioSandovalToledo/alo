var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");

var expresiones = {
    txtNombre: /^[a-zA-Z]{3,12}$/,
    txtPass: /^.{6,12}$/ 
}
var validar = (e) =>{
    switch(e.target.name){
        case"txtNombre":
            console.log("NOMBRE");
            break;
        case "txtPass":
            if(expresiones.txtPass.test(e.target.value) ){
                document.getElementById("Error").innerHTML="";
                document.getElementById("txtPass").style.borderColor ="black";
            }else{
                document.getElementById("Error").innerHTML="Error en la contraseña 6 a 12 Caracteres";
                document.getElementById("txtPass").style.borderColor="red";

            }
            break;

    }
}

inputs.forEach((input) =>{
    input.addEventListener("keyup", validar);
    input.addEventListener("blur", validar)
});