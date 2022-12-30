import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Token } from './token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl: string = environment.baseUrl + 'security/generate';
  constructor(private http: HttpClient) { }

  //Método que permite obtener el Token de autenticacion
  login(userName: string, password: string) : Observable<Token>{
    return this.http.post<Token>(this.apiUrl, { userName, password });
  }

}
