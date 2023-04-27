
//funcion que valida
$(function(){
    $("#mi-formulario").validate({
        rules:{
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            pass:{
                required:true
            },
            fono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:"pass"
            },    
        },//rules

        messages:{
            nom:{
                required:'Ingrese Nombre de usuario',
                minlength:'Formato incorrecto de nombre(3)'
            },
            correo:{
                required:'Ingrese correo de usuario',
                email:'Formato de correo invalido'
            },
            pass:{
                required:'Ingrese contraseña',
                minlength:'Caracteres insuficientes(8)'
            },
            fono:{
                required:'Ingrese telefono',
                minlength:'Cantidad de digitos insuficientes(9)'
            },
            fecha:{
                required:'Seleccione una fecha valida',
                min:'Fecha incorrecta'
            },
            pass2:{
                required:'Ingrese contraseña',
                minlength:'Caracteres insuficientes(8)',
                equalTo:'contraseñas no coinciden'
            },
        },//messages
    })
})

