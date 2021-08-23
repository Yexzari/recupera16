function Guardar(){

    function nota(nota){
    this.nota=nueva_nota;
    }
var notaCapturar = document.getElementById("medico").value;

descripcionn = new nota(notaCapturar);
console.log(descripcionn);
agregar();

}
var notas = [];
function  agregar () {
notas.push(descripcionn);
console.log(notas);
document.getElementById("table").innerHTML += '</thead><tbody><td>'+descripcionn.medico+'</td></tbody>';
}

function limpiar() {
medico.value = "";
cedula.value = "";
Paciente.value = "";
fecha.value = "";
medicamento.value = "";

}
