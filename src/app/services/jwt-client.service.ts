import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserResponseDTO } from '../dtos/user-response-dto';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  accessToken: string = "";
  username:string= ""; 

  userInfo?: UserResponseDTO;

  constructor(private httpClient: HttpClient) { }

  public generateToken(request: any) {
    return this.httpClient.post<string>("http://localhost:8080/authenticate", request, { responseType: 'text' as 'json' });
  }

  // public welcome(token: string, username: string): Observable<UserResponseDTO> {
  //   let tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.httpClient.get<UserResponseDTO>(`http://localhost:8080/api/users/${username}`, { headers })
  //   .pipe(map(resp => resp)); 
  // }

}
