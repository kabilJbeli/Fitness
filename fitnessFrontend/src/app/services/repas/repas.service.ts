import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  API_URL = environment.serverUrl +'/repasmanagement';
  constructor(private http: HttpClient) {}

  getRepasList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/findAllRepas`);
  }
  getRepas(idRepas:number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/findRepas/${idRepas}`);
  }
  createRepas(Repas: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/createRepas`, Repas);
  }
  updateRepas(Repas: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/updateRepas`, Repas);
  }
  deleteRepas(idRepas:number): Observable<any> {
    return this.http.delete<String>(`${this.API_URL}/deleteRepas/${idRepas}`);
  }
}
