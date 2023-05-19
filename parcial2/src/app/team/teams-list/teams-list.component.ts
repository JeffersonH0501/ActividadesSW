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

  constructor(private teamService: TeamService) { }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  ngOnInit() {
    this.getTeams();
  }

}
