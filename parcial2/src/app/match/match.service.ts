import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiURL: string = environment.matchesURL;

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]>{
    return this.http.get<Match[]>(this.apiURL);
  }

}
