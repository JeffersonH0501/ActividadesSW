import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiURL: string = environment.teamsURL;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(response => {
        const groups = response.groups;
        const teams: Team[] = [];

        // Iterar sobre los grupos y extraer los equipos
        groups.forEach((group: any) => {
          const teamsInGroup = group.teams;
          teams.push(...teamsInGroup);
        });

        return teams;
      })
    );
  }

}
