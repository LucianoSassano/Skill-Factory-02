
//global scope var declaration
var name;
var email;
var age;

var checkE = ["@hotmail.com","@gmail.com","@outlook.com","@yahoo.com"]


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formulario").addEventListener("submit",function( evento ){
        evento.preventDefault()
        console.log("submit");
        
        const name = checkName()
        console.log(name);
        const email = checkEmail()
        console.log(email);
        const age = checkAge()
        console.log(age);
        
    })

    addPerson()

    //evento.target.reset() con esto reseteo mi formulario una vez que ya hice todo

});
function inicio(){
}




function addPerson(age){

    if(age > 13){
        var tabla1 = document.getElementById('tabla1').getElementsByTagName('tbody')[0];
        var newRow1 = tabla1.insertRow();

    }
    if(age < 13){
        var tabla2 = document.getElementById('tabla2').getElementsByTagName('tbody')[0];
        var newRow2 = tabla2.insertRow();
        var i = 0;
        var newCell2 = newRow2.insertCell(i);
        var content = name;
        newCell2.appendChild(content);
        var newCell2 = newRow2.insertCell(i+1);
        var content = email;
        newCell2.appendChild(content);
        var newCell2 = newRow2.insertCell(i+2);
        var content = age;
        newCell2.appendChild(content);


        
        
    }

    
    
    



    
}


function checkName(){
        name = document.getElementById("nombre").value;
        if(name == null || name.length < 4){
            alert("nombre invalido,intentelo nuevamente");
            
        }
        return name;
}

function checkEmail(){
        email =  document.getElementById("email").value;
        for(var i = 0; i < checkE.length ; i++){
           if (email.includes(checkE[i]) == flase){
               alert("Direccion de correo invalida,intentelo nuevamente");
               
           }else{
               
               return email;
           }
        }
}

function checkAge(){
        age = document.getElementById("edad").value;
        if(age = 0){
            alert("edad invalida");
        }else{
            return age;
        }
}