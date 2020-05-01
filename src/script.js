document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("s").addEventListener("click", o1);
document.getElementById("r").addEventListener("click", o2);
document.getElementById("d").addEventListener("click", o3);
document.getElementById("m").addEventListener("click", o4);
document.getElementById("borrar").addEventListener("click", o5);

function n1() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("uno"); 
}
function n2() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("dos"); 
}
function n3() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("tres"); 
}
function n4() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("cuatro"); 
}
function n5() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("cinco"); 
}
function n6() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("seis"); 
}
function n7() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("siete"); 
}
function n8() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("ocho"); 
}
function n9() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("nueve"); 
}
function n0() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("cero"); 
}
function o1() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("sumar"); 
}
function o2() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("restar"); 
}
function o3() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("dividir"); 
}
function o4() {
    document.getElementById('comandos');
    comandos.value = comandos.value.concat("multiplicar"); 
}
function o5() {
    document.getElementById('comandos');
    comandos.value = ""; 
}
