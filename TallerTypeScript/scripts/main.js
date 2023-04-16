import { Series } from './data.js';
var seriesTbody = document.getElementById('series');
var imagen = document.getElementById('imagen');
var cuerpo = document.getElementById('cuerpo');
renderSeriesInTable(Series);
function renderSeriesInTable(series) {
    //Agrega las series a la lista
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                                <td><a href='#'>").concat(s.name, "</a></td>\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        // Agrega el eventListener al nombre de la serie
        var nameElement = trElement.querySelector('a');
        nameElement.addEventListener('click', function () {
            showSerieInformation(s);
        });
    });
    //Agrega la fila del promedio al final de la tabla
    var trSeasonsAvarage = document.createElement("tr");
    trSeasonsAvarage.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(getSeasonsAverage(series), "</td>");
    seriesTbody.appendChild(trSeasonsAvarage);
}
function getSeasonsAverage(series) {
    var seasonsAverage = 0;
    var sumCantSeasons = 0;
    var sumCantSeries = series.length;
    series.forEach(function (serie) { return sumCantSeasons += serie.seasons; });
    seasonsAverage = sumCantSeasons / sumCantSeries;
    return Number(seasonsAverage.toFixed(2));
}
function showSerieInformation(serie) {
    // Eliminar imagen anterior
    imagen.innerHTML = '';
    // Crear nueva imagen
    var imgElement = document.createElement("img");
    //imgElement.src = `"${serie.imageURL}"`;
    //imgElement.src = serie.imageURL;
    imgElement.src = "./imagenes/" + serie.name + ".png";
    imgElement.alt = "imagenSerie";
    imgElement.style.height = "150px";
    imgElement.style.width = "300px";
    // Agregar nueva imagen al contenedor de imagen
    imagen.appendChild(imgElement);
    // Agregar información de la serie al cuerpo
    cuerpo.innerHTML = "<h4>".concat(serie.name, "</h4>\n                        <p>").concat(serie.description, "</p>\n                        <a href=\"").concat(serie.serieURL, "\">").concat(serie.serieURL, "</a>");
}
