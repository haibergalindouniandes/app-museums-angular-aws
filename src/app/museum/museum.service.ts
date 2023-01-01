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

  //Método que permite listar los museos
  getMuseums(token: string, limit?: number): Observable<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'access-token': token,
      })
    }
    if (limit) {
      return this.http.get<any>(`${this.apiUrl}?limit=${limit}`, httOptions);
    }
    return this.http.get<any>(this.apiUrl, httOptions);
  }

  //Método que permite consultar un museo por ID
  getMuseum(museumId: number, token: string): Observable<any> {
    const httOptions = {
      headers: new HttpHeaders({
        'access-token': token,
      })
    }
    return this.http.get<any>(`${this.apiUrl}/${museumId}`, httOptions);
  }

  //Método que permite crear un nuevo museo
  createMuseum(museum: Museum, token: string): Observable<Museum> {
    const httOptions = {
      headers: new HttpHeaders({
        'access-token': token,
      })
    }
    return this.http.post<Museum>(this.apiUrl, museum, httOptions);
  }

  //Método que permite actualizar un museo
  updateMuseum(museumId: number, museum: Museum, token: string): Observable<Museum> {
    const httOptions = {
      headers: new HttpHeaders({
        'access-token': token,
      })
    }
    //Utilzando el PUT para actualizar todo el museo
    return this.http.put<Museum>(`${this.apiUrl}/${museumId}`, museum, httOptions);
    //Utilzando el PATH para actualizar solo la información enviada
    // return this.http.patch<Museum>(`${this.apiUrl}/${museumId}`, museum, httOptions);
  }

    //Método que permite eliminar un museo por ID
    deleteMuseum(museumId: number, token: string): Observable<any> {
      const httOptions = {
        headers: new HttpHeaders({
          'access-token': token,
        })
      }
      return this.http.delete<any>(`${this.apiUrl}/${museumId}`, httOptions);
    }
}
