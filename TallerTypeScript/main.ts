import { Serie } from './serie.js';
import { Series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let imagen: HTMLElement = document.getElementById('imagen')!;
let cuerpo: HTMLElement = document.getElementById('cuerpo')!;

renderSeriesInTable(Series);

function renderSeriesInTable(series: Serie[]): void {

    //Agrega las series a la lista
    series.forEach( s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${s.id}</td>
                                <td><a href='#'>${s.name}</a></td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        // Agrega el eventListener al nombre de la serie
        let nameElement = trElement.querySelector('a') as HTMLAnchorElement;
        nameElement.addEventListener('click', () => {
            showSerieInformation(s);
        })
    });

    //Agrega la fila del promedio al final de la tabla
    let trSeasonsAvarage = document.createElement("tr");
    trSeasonsAvarage.innerHTML = `<td colspan="4">Seasons average: ${getSeasonsAverage(series)}</td>`;
    seriesTbody.appendChild(trSeasonsAvarage);
}

function getSeasonsAverage(series: Serie[]): number {
    let seasonsAverage: number = 0;
    let sumCantSeasons: number = 0;
    let sumCantSeries: number = series.length;

    series.forEach((serie) => sumCantSeasons += serie.seasons);

    seasonsAverage = sumCantSeasons / sumCantSeries;

    return Number(seasonsAverage.toFixed(2));
}


function showSerieInformation(serie: Serie): void {
    // Eliminar imagen anterior
    imagen.innerHTML = '';

    // Crear nueva imagen
    let imgElement = document.createElement("img");
    //imgElement.src = `"${serie.imageURL}"`;
    //imgElement.src = serie.imageURL;
    imgElement.src = "./imagenes/"+serie.name+".png";
    imgElement.alt = "imagenSerie";
    imgElement.style.height = "150px";
    imgElement.style.width = "300px";

    // Agregar nueva imagen al contenedor de imagen
    imagen.appendChild(imgElement);

    // Agregar información de la serie al cuerpo
    cuerpo.innerHTML = `<h4>${serie.name}</h4>
                        <p>${serie.description}</p>
                        <a href="${serie.serieURL}">${serie.serieURL}</a>`;
}

  


