import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  API_URL = environment.serverUrl +'/ingredientmanagement';
  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/findIngredients`);
  }
  getIngredient(idIngredient:number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/findIngredient/${idIngredient}`);
  }
  createIngredient(Ingredient: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/createIngredient`, Ingredient);
  }
  updateIngredient(Ingredient: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/updateIngredient`, Ingredient);
  }
  deleteIngredient(idIngredient:number): Observable<any> {
    return this.http.delete<String>(`${this.API_URL}/deleteIngredient/${idIngredient}`);
  }
}
