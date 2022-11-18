function validarDatos(){
    var nombre = document.getElementById("textNombre").value;
    if(nombre == "" || nombre == null){
        alert("Debe ingresar un nombre");
        return false;
    }

    //validar que el nombre no sea numero.
    if(!isNaN(nombre)){
        alert("El nombre no puede ser un numero");
        return false;
    }
    //validar que el nombre no tenga numeros.
    if(nombre.match(/\d+/g)){   
        alert("El nombre no puede tener numeros");
        return false;
    }
    //validar que el nombre no tenga caracteres especiales.
    if(nombre.match(/[^a-zA-Z0-9]/g)){
        alert("El nombre no puede tener caracteres especiales");
        return false;
    }

    // Las mismas validaciones para apellidos
    var apellido = document.getElementById("textApellido").value;
    if(apellido == "" || apellido == null){
        alert("Debe ingresar un apellido");
        return false;
    }

    //validar que el apellido no sea numero.
    if(!isNaN(apellido)){
        alert("El apellido no puede ser un numero");
        return false;
    }
    //validar que el apellido no tenga numeros.
    if(apellido.match(/\d+/g)){   
        alert("El apellido no puede tener numeros");
        return false;
    }
    //validar que el apellido no tenga caracteres especiales.
    if(apellido.match(/[^a-zA-Z0-9]/g)){
        alert("El apellido no puede tener caracteres especiales");
        return false;
    }
    //Validación para numero
    var telefonoNumber = document.getElementById("telefono").value
    
    if(telefonoNumber == "" || telefonoNumber == null){
        alert("Debe ingresar su telefono");
        return false;
    }

    if(isNaN(telefonoNumber)){
        alert("El telefono no debe tener letras");
        return false;
    }

    //Validación de Correo
    var dateEmail = document.getElementById("email").value;
    if(dateEmail == "" || dateEmail == null){
        alert("Debe ingresar su correo");
        return false;
    }
}
