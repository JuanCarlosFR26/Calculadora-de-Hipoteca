function saludar() {
    let name = prompt("Indíquenos su nombre");
    let saludo = `Bienvenido ${name}, seleccione las condiciones de su hipoteca`;
    alert(saludo)
}

saludar();

/* Calculo de las operaciones */ 

function calcular() {
    const cantidad = document.getElementById('cantidad').value;
    const cuotas = document.getElementById('cuotas').value;
    const interes = document.getElementById('interes').value;

    let totalCalculo = ((cantidad/cuotas) * interes);


    document.getElementById('total').innerHTML = Math.round(totalCalculo);
}