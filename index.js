window.onload = function() {
    document.getElementById('imcForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        var peso = parseFloat(document.getElementById('txtPeso').value);
        var altura = parseFloat(document.getElementById('txtAltura').value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, introduce un peso y una altura válidos.');
            return;
        }

        var imc = peso / (altura * altura);
        var mensaje = 'Su IMC es: ' + imc.toFixed(2) + ' - ';

        if (imc < 18.5) {
            mensaje += 'Bajo peso';
        } else if (imc < 25) {
            mensaje += 'Peso normal';
        } else if (imc < 30) {
            mensaje += 'Sobrepeso';
        } else {
            mensaje += 'Obesidad';
        }

        document.getElementById('resultado').innerText = mensaje;
    });
};
