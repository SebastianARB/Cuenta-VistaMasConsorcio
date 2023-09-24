document.addEventListener('DOMContentLoaded', () => {
    // Constantes
    const interes_anual = 0.10; // 10%
    const interes_anual2 = 0.03; // 3% para Santander
    const comision_tarjeta = 3300;

    // Elementos del DOM consorcio
    const saldoInicialInput = document.getElementById('saldoInicial');
    const btnCalcular = document.getElementById('btnCalcular');
    const gananciaElement = document.getElementById('ganancia');
    const valorTotalElement = document.getElementById('valorTotal');
    const porcentajeMensualElement = document.getElementById('porcentajeMensual');
    const porcentajeAnualElement = document.getElementById('porcentajeAnual');
    const gananciaAnualElement = document.getElementById('gananciaAnual');
    const sinComisionElement = document.getElementById('sinComision');
    const montoAnualSinDescontarElement = document.getElementById('montoAnualSinDescontar');
    
    // Elementos del DOM santander
    const saldoInicialInput2 = document.getElementById('saldoInicial2');
    const btnCalcular2 = document.getElementById('btnCalcular2');
    const gananciaElement2 = document.getElementById('ganancia2');
    const valorTotalElement2 = document.getElementById('valorTotal2');
    const porcentajeMensualElement2 = document.getElementById('porcentajeMensual2');
    const porcentajeAnualElement2 = document.getElementById('porcentajeAnual2');
    const gananciaAnualElement2 = document.getElementById('gananciaAnual2');
    const sinComisionElement2 = document.getElementById('sinComision2');
    const montoAnualSinDescontarElement2 = document.getElementById('montoAnualSinDescontar2');

    // Función para calcular los valores y actualizar el DOM para el consorcio
    function calcularYActualizar() {
        const inicial = parseFloat(saldoInicialInput.value);

        if (!isNaN(inicial)) {
            const interesMensual = interes_anual / 12;
            const gananciaGenerada = (inicial * interesMensual - comision_tarjeta).toFixed(2);
            const montoTotal = (inicial + parseFloat(gananciaGenerada)).toFixed(2);
            const porcentajeGananciaMensual = (((montoTotal - inicial) / inicial) * 100).toFixed(2);
            const porcentajeGananciaAnual = (porcentajeGananciaMensual * 12).toFixed(2);
            const montoTotalAnual = (inicial + parseFloat(gananciaGenerada * 12)).toFixed(2);
            const sinComisionTarjeta = (parseFloat(montoTotal) + comision_tarjeta).toFixed(2);
            const montoTotalSinDescontar = (inicial + parseFloat(gananciaGenerada) * 12 + comision_tarjeta * 12).toFixed(2);

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

    // Función para calcular los valores y actualizar el DOM para Santander
    function calcularYActualizar2() {
        const inicial = parseFloat(saldoInicialInput2.value);

        if (!isNaN(inicial)) {
            const interesMensual2 = interes_anual2 / 12;
            const gananciaGenerada = (inicial * interesMensual2).toFixed(2);
            const montoTotal = (inicial + parseFloat(gananciaGenerada)).toFixed(2);
            const porcentajeGananciaMensual = (((montoTotal - inicial) / inicial) * 100).toFixed(2);
            const porcentajeGananciaAnual = (porcentajeGananciaMensual * 12).toFixed(2);
            const montoTotalAnual = (inicial + parseFloat(gananciaGenerada * 12)).toFixed(2);
            const formato = {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            };

            gananciaElement2.textContent = parseFloat(gananciaGenerada).toLocaleString('es-ES', formato);
            valorTotalElement2.textContent = parseFloat(montoTotal).toLocaleString('es-ES', formato);
            porcentajeMensualElement2.textContent = parseFloat(porcentajeGananciaMensual).toLocaleString('es-ES', formato) + "%";
            porcentajeAnualElement2.textContent = parseFloat(porcentajeGananciaAnual).toLocaleString('es-ES', formato) + "%";
            gananciaAnualElement2.textContent = parseFloat(montoTotalAnual).toLocaleString('es-ES', formato);
            sinComisionElement2.textContent = parseFloat(sinComisionTarjeta).toLocaleString('es-ES', formato);
            montoAnualSinDescontarElement2.textContent = parseFloat(montoTotalSinDescontar).toLocaleString('es-ES', formato);
        }
    }

    // Evento clic en el botón Calcular para el consorcio
    btnCalcular.addEventListener('click', calcularYActualizar);

    // Evento clic en el botón Calcular para Santander
    btnCalcular2.addEventListener('click', calcularYActualizar2);
});
