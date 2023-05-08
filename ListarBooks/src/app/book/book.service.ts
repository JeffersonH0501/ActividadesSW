import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BookDetail } from './book-detail';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private apiURL: string = environment.baseURL;

constructor(private http: HttpClient) { }

getBooks(): Observable<BookDetail[]> {
  return this.http.get<BookDetail[]>(this.apiURL);
}
}
