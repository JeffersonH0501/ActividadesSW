import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Array<Team> = [];
  groupsGoals: Array<string> = [];
  selectedTeam!: Team;
  selected = false;

  onSelected(team: Team): void {
    this.selected = true;
    this.selectedTeam = team;
  }

  constructor(private teamService: TeamService) { }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
      this.getGroupsGoals();
    });
  }

  getGroupsGoals(): void {

    const goalsByGroup: { [key: string]: number } = {};

    for (const team of this.teams) {

      const group = team.group_letter;
      const goals = team.goals_for;

      if (!goalsByGroup.hasOwnProperty(group)) {
        goalsByGroup[group] = goals;
      } else {
        goalsByGroup[group] += goals;
      }

    }

    const sortedCountries = Object.entries(goalsByGroup)
      .sort((a, b) => b[1] - a[1])
      .map(([group, goals]) => `${group}: ${goals} goals`);

    this.groupsGoals = sortedCountries;
  }

  ngOnInit() {
    this.getTeams();
  }

}
