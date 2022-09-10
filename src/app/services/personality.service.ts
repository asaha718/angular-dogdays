import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personality } from '../dtos/personality';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {

  constructor(private httpClient: HttpClient) { }

  getPersonalities(token: string | null): Observable<Personality[]>{ 
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<Personality[]>("http://localhost:8080/api/personality", { headers })
      .pipe(map(resp => resp))
  }
}
