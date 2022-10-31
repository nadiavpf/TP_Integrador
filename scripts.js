document.getElementById("estudiante").onclick = function () { document.getElementById("categoria").value = "catEstudiante"; }
document.getElementById("trainee").onclick = function () { document.getElementById("categoria").value = "catTrainee"; }
document.getElementById("junior").onclick = function () { document.getElementById("categoria").value = "catJunior"; }
document.getElementById("reset").onclick = function () { document.getElementById("total").innerHTML = "Total a Pagar: $"; }
document.getElementById("resumen").onclick = function () { calcularTotal() };

function calcularTotal(){
    let categoria = document.getElementById("categoria").value;
    let dto = 1;
    const valorTicket = 200;
    let cantidad = document.getElementById("cantidad").value;
    
    if (cantidad < 1){
        cantidad = 1;
        document.getElementById("cantidad").value = 1;
    }
    
    switch (categoria){
        case "catEstudiante":
            dto = 0.2;
            break;
        case "catTrainee":
            dto = 0.5;
            break;
        case "catJunior":
            dto = 0.85;
            break;
        default:
            dto = 1;
    }
    
    document.getElementById("total").innerHTML = "Total a Pagar: $" + (valorTicket * cantidad * dto);
}