// CONFIGURACIÓN SEMANAL: EDITA AQUÍ CADA LUNES
const semanal = {
  fecha: "19 de Junio 2023",
  numeroSemana: 25,
  resumenEjecutivo: "Laomportamiento mixto, con tecnológicas liderando las ganancias mientras que sectores defensivos retrocedieron. La FED mantuvo tasas pero señaló posibles alzas adicionales en 2023.",
  puntosClave: [
    "Inflación en EEUU continúa su tendencia a la baja",
    "BCE subió tasas 25 puntos básicos como se esperaba",
    "Datos de empleo en EEUU muestran resiliencia del mercado laboral",
    "Banco de Japón mantiene política monetaria ultra expansiva"
  ],
  proximosEventos: [
    "21/06: Minutas de la FED",
    "22/06: PMI preliminar de junio en Europa y EEUU",
    "23/06: Datos de inflación PCE en EEUU",
    "23/06: Confianza del consumidor de la Universidad de Michigan"
  ],
  pdfUrl: "#"  // enlace al PDF de descarga
};

// LÓGICA DE RENDERIZADO: NO EDITAR
function renderMinuta(data) {
  const container = document.getElementById("minuta-semanal");
  if (!container) return;
  container.innerHTML = `
    <div class="p-5">
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3">
          <!-- Icono calendario -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0
                     00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900">Minuta Semanal – ${data.fecha}</h3>
          <p class="text-sm text-gray-500">Semana ${data.numeroSemana}</p>
        </div>
      </div>

      <div class="mb-4">
        <h4 class="font-medium text-gray-900 mb-2">Resumen Ejecutivo</h4>
        <p class="text-gray-600 text-sm">${data.resumenEjecutivo}</p>
      </div>

      <div class="mb-4">
        <h4 class="font-medium text-gray-900 mb-2">Puntos Clave</h4>
        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
          ${data.puntosClave.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>

      <div class="mb-4">
        <h4 class="font-medium text-gray-900 mb-2">Próximos Eventos</h4>
        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
          ${data.proximosEventos.map(e => `<li>${e}</li>`).join("")}
        </ul>
      </div>

      <div class="flex justify-end mt-4">
        <a href="${data.pdfUrl}" class="btn-secondary inline-block px-4 py-2 rounded-md text-sm font-medium text-center">
          Descargar PDF
        </a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderMinuta(semanal);
});
