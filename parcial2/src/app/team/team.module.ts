import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamsListComponent, TeamDetailComponent],
  exports: [TeamsListComponent]
})
export class TeamModule { }
