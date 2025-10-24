const portfolio = document.querySelector("#porotito");

async function datos(raw) {
  try {
    let consulta = await fetch(raw);
    let resultado = await consulta.json();
    let trabajos = resultado. data; 

    console.log(trabajos); 

    trabajos.forEach((trabajo) => {
      function generarBotones(categorias) {
        let botonesHTML = '';
        if (Array.isArray(categorias)) {
          categorias.forEach(categoria => {
            botonesHTML += `<button type="button" class="btn btn-sm btn-outline-secondary">${categoria}</button>\n`;
          });
        } else {
          botonesHTML += `<button type="button" class="btn btn-sm btn-outline-secondary">${categorias}</button>\n`;
        }
        return botonesHTML;
      }

      const botonesCategoria = generarBotones(trabajo.categoria);

      portfolio.innerHTML += `
        <div class="col">
          <div class="card shadow-sm">
            <img src="${trabajo.imagen}" class="card-img-top" alt="${trabajo.titulo}">
            <div class="card-body">
              <p class="card-text">${trabajo.titulo}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  ${botonesCategoria}
                </div>
                <small class="text-body-secondary">Reciente</small>
              </div>
            </div>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}

datos("https://api.myjson.online/v1/records/ae0ee05a-48bb-4998-9ff3-0b02dc5fa1ae");

