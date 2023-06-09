function calcular(){
    var nombre = document.getElementById("universidad-nombre").value;
    var anio1 = document.getElementById("anio-1").checked;
    var anio2 = document.getElementById("anio-2").checked;
    var anio3 = document.getElementById("anio-3").checked;
    var anio4 = document.getElementById("anio-4").checked;
    var anio5 = document.getElementById("anio-5").checked;
    var precio = document.getElementById("precio").value;
    let metodos = document.getElementById("metodo").value;

    anio1 = parseInt(anio1);
    anio2 = parseInt(anio2);
    anio3 = parseInt(anio3);
    anio4 = parseInt(anio4);
    anio5 = parseInt(anio5);
    precio = parseInt(precio);

    if (anio1){
        precio = precio * 11;
    }
    if (anio1 && anio2){
        precio = precio * 22;
    }
    if (anio1 && anio2 && anio3){
        precio = precio * 33;
    }
    if (anio1 && anio2 && anio3 && anio4){
        precio = precio * 44;
    }
    if(anio1 && anio2 && anio3 && anio4 && anio5){
        precio = precio * 55;
    }

    if(metodos == "credito"){
        precio = precio * 0.85;
    }
    else if(metodos == "debito"){
       precio = precio * 0.90;
    }
    else if(metodos == "transferencia"){
        precio = precio * 1;
    }

    document.getElementById("resultado").innerHTML="El costo de los anios que cursara en la " +nombre+ "es: $" +precio;
 }


function Borrar(){
    document.getElementById("universidad-nombre").value="";
    document.getElementById("anio-1").checked="";
    document.getElementById("anio-2").checked="";
    document.getElementById("anio-3").checked="";
    document.getElementById("anio-4").checked="";
    document.getElementById("anio-5").checked="";
    document.getElementById("precio").value="";
    document.getElementById("metodo").value="";
    document.getElementById("resultado").innerHTML="";
}
