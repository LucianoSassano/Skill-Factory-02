/*var nombre ;
nombre = 'juan';
var titulo;
titulo = 'Sr';

function saludar (nombre,titulo){
    console.log("hola" , titulo ,nombre);
}

saludar(nombre,titulo);*/

/*var nacimineto;
nacimineto = prompt("ingrese su año de nacimiento");

    function edad(nacimiento){
        var edad;
        edad = 2020-nacimineto;
        console.log("Usted tiene",edad ,"años");

    }*/
        


//modificar para agregar exactitud con meses y dias

var año = prompt("Ingrese su año de nacimiento");
var mes = prompt("Ingrese su mes de nacimiento");

    function edad(año,mes){
        var actual = new Date();
        var result = 2020 - año;
        if(mes < actual.getMonth()){
            result--;
        }
        console.log("Usted tiene",result,"años actualmente");
    }

    edad(año,mes);