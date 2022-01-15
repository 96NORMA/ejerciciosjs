//ejercicio 1
(() =>{
    let num_transacciones = prompt("Indica el numero de transacciones");
    trasanccion(num_transacciones);
})();
function trasanccion (num_transacciones){
    var transacciones= null;
    var total =null;
    transacciones= num_transacciones*3;
    console.log (transacciones);
    for (let i= 0; i<num_transacciones;i++ ){
        let pagos = prompt (`Ingresa el monto de la transaccion`);
        total = Number (total)+Number(pagos);
        console.long(total)
    }
    total+= transacciones;
    total=total+(total*0.01);
    alert (`El total  a pagar es: ${total} dolares`);
}

//Ejercicio 2.1
var amx1 = prompt("Ingresa el nombre de tu amigo 1");
var amx2 = prompt("Ingresa el nombre de tu amigo 2");
var amx3 = prompt("Ingresa el nombre de tu amigo 3");
function amigos(amx1,amx2,amx3){
    console.long("Bienvennido" + amx1 +"," + amx2 +"," + amx3);
}
amigos (amx1, amx2, amx3);

//ejercicio 2.2
var year = prompt("Ingresa tu año de nacimiento");
var now = 2022;
function birth (num1, num2)
{
    var res =num2-num1;
    alert ("Tu edad es" + res)
}
birth(year,now);

//ejercicio 2.3
var amx1 = prompt("Ingresa tu nombre persona 1");
var edad1 = prompt("Ingresa tu edad persona 1");
var amx1 = prompt("Ingresa tu nombre persona 2");
var edad1 = prompt("Ingresa tu edad persona 2");
var amx1 = prompt("Ingresa tu nombre persona 3");
var edad1 = prompt("Ingresa tu edad persona 3");
function amigos(amx1,amx2,amx3,edad1,edad2,edad3){
    alert("Bienvenido" + amx1 + "Tu edad es " + edad1 + "Bienvenido" + amx2 + "Tu edad es" + edad2 + "Bienvenido" + amx3 + "Tu edad es " + edad3);
}
amigos (amx1,amx2,amx3,edad1,edad2, edad3)

//Challange Yourself
function approve (cali){
    var cali=parseInt (prompt("Ingresa tu calificación "));
        if (cali>=5 && cali <=8){
            alert ("Tu estatus es " + true);
        }
        else if (cali >8 && cali <=10){
            alert ("Tu estatus es  Excelent");  
        }
        else if (cali ==11){
            alert ("Tu estatus es  Perfect");  
        }
        else if (cali >11){
            alert ("Ingresa una calificación valida");  
        }
        else {
            alert ("Tu status es"+ false)
        }   
}
approve ();
