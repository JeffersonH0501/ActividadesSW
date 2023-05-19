import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  matches: Array<Match> = [];
  countriesWithGoals: Array<string> = [];

  constructor(private matchService: MatchService) { }

  getMatches(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
      this.getCountriesWithMostHomeGoals();
    });
  }

  getCountriesWithMostHomeGoals(): void {
    const goalsByCountry: { [key: string]: number } = {}; // Firma de índice añadida

    for (const match of this.matches) {
      const homeTeam = match.home_team;
      const country = homeTeam.country;
      const goals = homeTeam.goals;

      if (!goalsByCountry.hasOwnProperty(country)) {
        goalsByCountry[country] = goals;
      } else {
        goalsByCountry[country] += goals;
      }
    }

    const sortedCountries = Object.entries(goalsByCountry)
      .sort((a, b) => b[1] - a[1])
      .map(([country]) => country);

    this.countriesWithGoals = sortedCountries;
  }

  ngOnInit() {
    this.getMatches();
  }

}
