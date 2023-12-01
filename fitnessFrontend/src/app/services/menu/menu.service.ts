import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  API_URL = environment.serverUrl + '/menumanagement';

  constructor(private http: HttpClient) {
  }

  getMenusList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/findMenus`);
  }
  getMenu(idRepas:number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/findMenu/${idRepas}`);
  }
  createMenu(menu: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/affectMenu`, menu);
  }
  updateMenu(Repas: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/updateMenu`, Repas);
  }
  deleteMenu(idRepas:number): Observable<any> {
    return this.http.delete<String>(`${this.API_URL}/deleteMenu/${idRepas}`);
  }

}
