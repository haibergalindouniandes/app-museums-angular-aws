import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Museum } from './museum';

@Injectable({
  providedIn: 'root'
})

export class MuseumService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  //Método que permite obtener los museos
  getMuseums(token: string): Observable<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'access-token' : token,
      })
    }
    return this.http.get<any>(this.apiUrl, httOptions);
  }
}
