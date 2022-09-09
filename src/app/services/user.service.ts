import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponseDTO } from '../dtos/user-response-dto';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(lsService: LocalStorageService, private httpClient: HttpClient) { }

  getUser(token: string | null, username: string | null): Observable<UserResponseDTO> {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<UserResponseDTO>(`http://localhost:8080/api/users/${username}`, { headers })
      .pipe(map(resp => resp))
  }
}
