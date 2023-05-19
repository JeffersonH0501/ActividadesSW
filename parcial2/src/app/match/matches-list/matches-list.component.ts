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

    const goalsByCountry: { [key: string]: number } = {};

    for (const match of this.matches) {

      const country = match.home_team.name;
      const goals = match.home_team.goals;

      if (typeof goals !== 'undefined') {
        if (!goalsByCountry.hasOwnProperty(country)) {
          goalsByCountry[country] = goals;
        } else {
          goalsByCountry[country] += goals;
        }
      }
    }

    const sortedCountries = Object.entries(goalsByCountry)
      .sort((a, b) => b[1] - a[1])
      .map(([country, goals]) => `${country}: ${goals} goals`);

    this.countriesWithGoals = sortedCountries;
  }

  ngOnInit() {
    this.getMatches();
  }

}
