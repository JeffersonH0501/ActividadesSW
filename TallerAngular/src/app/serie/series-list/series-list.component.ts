import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  promedioTemporadas: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.getSeasonsAverage(this.series);
    });
  }

  getSeasonsAverage(series: Serie[]): void {
    let seasonsAverage: number = 0;
    let sumCantSeasons: number = 0;
    let sumCantSeries: number = series.length;

    series.forEach((serie) => sumCantSeasons += serie.seasons);

    seasonsAverage = sumCantSeasons / sumCantSeries;

    this.promedioTemporadas = Number(seasonsAverage.toFixed(2));
  }

  ngOnInit() {
    this.getSeries();
  }
}
