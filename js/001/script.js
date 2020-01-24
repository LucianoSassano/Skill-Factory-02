/*var nombre ;
nombre = 'juan';
var titulo;
titulo = 'Sr';

function saludar (nombre,titulo){
    console.log("hola" , titulo ,nombre);
}

saludar(nombre,titulo);*/


/*
var año = prompt("Ingrese su año de nacimiento");
var mes = prompt("Ingrese su mes de nacimiento");

    function calcularEdad(){
        mes--;
        var edad = new Date(año,mes)
        var actual = new Date();
        var resultYear = actual.getFullYear() - edad.getFullYear();
        if(mes > actual.getMonth()){
            resultYear--;
        }
        console.log("Usted tiene",resultYear,"años actualmente");
    }

    calcularEdad();*/


    //utilizar operador ternario
    /*
    var a = true ? 2 : 0 ;  //si la variable a es true su valor es 2 de lo contrario es 0

    var a =  siSeCumple || siNoSeCumple

    var a = isset(miVariable) ? miVariable : 0; //si mi variable existe ... de lo contrario toma valor 0

    // infinity se utiliza para saber si algo es infinito


    var miArreglo = []; //array literal
    var miArreglo2 = new Array;

    var obj = {};
    var obj = new Object;

    //declaracion de un obj con sus key values

    var persona = {
        nombre : "luciano",
        trabajo :"estudiante",
        toString : function() {
            return "nombre:"+this.nombre
        }
    }

    //callback!*/


    var Mes = {
        nombre:'a',
        numero:0,
        cantDias:0,
        toString : function(){
            return "mes de : " + this.nombre + "numero :" + this.numero + "cantidad de dias:" + this.cantDias
        }

    }

    var arregloMeses = new Array;


    function Calendario (){
        

        var continuar = 'y';

        while(continuar === 'y'){
            var mes = new Mes();
            var name = prompt("ingrese nombre del mes");
            name = name.toLowerCase();
            mes.nombre = name;
            var number = prompt("ingrese numero del mes");
            mes.numero = number;
            var days = prompt("ingrese la cantidad de dias del mes");
            mes.cantDias = days;
            arregloMeses.push(mes);
            var continuar = prompt("para continuar presione y de lo contrario presione n");
    
        }

        return arregloMeses;

    }

    function verMeses(){

        var i = 0;
        while(i > arregloMeses.length()){
            console.log(arregloMeses[i].toString());
        }
    }

    