document.addEventListener('DOMContentLoaded', () => {
    const saldoInicial = document.getElementById('saldoInicial');
    const btnCalcular = document.getElementById('btnCalcular');
    const ganacia = document.getElementById('ganancia');
    const valorTotal = document.getElementById('valorTotal');
    const porcentajeMensual = document.getElementById('porcentajeMensual');
    const porcentajeAnual = document.getElementById('porcentajeAnual');
    const gananciaAnual = document.getElementById('gananciaAnual');
    const sinComision = document.getElementById('sinComision');

    btnCalcular.addEventListener('click', () => {
        const inicial = parseFloat(saldoInicial.value);
        const interesAnual = 10 / 100;
        const interesMensual = (interesAnual / 12); 
        const comisionTarjeta = 3300;

        if (!isNaN(inicial)) {
            const gananciaGenerada = ((inicial * interesMensual) - comisionTarjeta).toFixed(2);
            const montoTotal = (inicial + parseFloat(gananciaGenerada)).toFixed(2);
            const porcentajeGananciaMensual = (((montoTotal - inicial) / inicial) * 100).toFixed(2);
            const porcentajeGananciaAnual = (porcentajeGananciaMensual * 12) .toFixed(2);
            const montoTotalAnual = (inicial + parseFloat(gananciaGenerada * 12 )).toFixed(2);
            const sinComisionTarjeta = (parseFloat(montoTotal) + comisionTarjeta).toFixed(2);


            // Formatear números con puntos como separadores de miles
            const formato = {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            };

            ganacia.textContent = parseFloat(gananciaGenerada).toLocaleString('es-ES', formato);
            valorTotal.textContent = parseFloat(montoTotal).toLocaleString('es-ES', formato);
            porcentajeMensual.textContent = parseFloat(porcentajeGananciaMensual).toLocaleString('es-ES', formato) + "%";
            porcentajeAnual.textContent = parseFloat(porcentajeGananciaAnual).toLocaleString('es-ES', formato) + "%";
            gananciaAnual.textContent = parseFloat(montoTotalAnual).toLocaleString('es-ES', formato) ;
            sinComision.textContent = parseFloat(sinComisionTarjeta).toLocaleString('es-ES', formato);
        }
    });
});
