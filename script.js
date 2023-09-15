document.addEventListener('DOMContentLoaded', () => {
    // Constantes
    const INTERES_ANUAL = 0.10; // 10%
    const COMISION_TARJETA = 3300;

    // Elementos del DOM
    const saldoInicialInput = document.getElementById('saldoInicial');
    const btnCalcular = document.getElementById('btnCalcular');
    const gananciaElement = document.getElementById('ganancia');
    const valorTotalElement = document.getElementById('valorTotal');
    const porcentajeMensualElement = document.getElementById('porcentajeMensual');
    const porcentajeAnualElement = document.getElementById('porcentajeAnual');
    const gananciaAnualElement = document.getElementById('gananciaAnual');
    const sinComisionElement = document.getElementById('sinComision');
    const montoAnualSinDescontarElement = document.getElementById('montoAnualSinDescontar');

    // Función para calcular los valores y actualizar el DOM
    function calcularYActualizar() {
        const inicial = parseFloat(saldoInicialInput.value);

        if (!isNaN(inicial)) {
            const interesMensual = INTERES_ANUAL / 12;
            const gananciaGenerada = (inicial * interesMensual - COMISION_TARJETA).toFixed(2);
            const montoTotal = (inicial + parseFloat(gananciaGenerada)).toFixed(2);
            const porcentajeGananciaMensual = (((montoTotal - inicial) / inicial) * 100).toFixed(2);
            const porcentajeGananciaAnual = (porcentajeGananciaMensual * 12).toFixed(2);
            const montoTotalAnual = (inicial + parseFloat(gananciaGenerada * 12)).toFixed(2);
            const sinComisionTarjeta = (parseFloat(montoTotal) + COMISION_TARJETA).toFixed(2);
            const montoTotalSinDescontar = (inicial + parseFloat(gananciaGenerada) * 12 + COMISION_TARJETA * 12).toFixed(2);

            const formato = {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            };

            gananciaElement.textContent = parseFloat(gananciaGenerada).toLocaleString('es-ES', formato);
            valorTotalElement.textContent = parseFloat(montoTotal).toLocaleString('es-ES', formato);
            porcentajeMensualElement.textContent = parseFloat(porcentajeGananciaMensual).toLocaleString('es-ES', formato) + "%";
            porcentajeAnualElement.textContent = parseFloat(porcentajeGananciaAnual).toLocaleString('es-ES', formato) + "%";
            gananciaAnualElement.textContent = parseFloat(montoTotalAnual).toLocaleString('es-ES', formato);
            sinComisionElement.textContent = parseFloat(sinComisionTarjeta).toLocaleString('es-ES', formato);
            montoAnualSinDescontarElement.textContent = parseFloat(montoTotalSinDescontar).toLocaleString('es-ES', formato);
        }
    }

    // Evento clic en el botón Calcular
    btnCalcular.addEventListener('click', calcularYActualizar);
});
