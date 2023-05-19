import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesListComponent } from './matches-list/matches-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatchesListComponent],
  exports: [MatchesListComponent]
})
export class MatchModule { }
