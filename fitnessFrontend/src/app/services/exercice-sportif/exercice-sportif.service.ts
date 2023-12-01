import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciceSportifService {

  constructor(private http: HttpClient) {}

  getExerciceSportifs(): Observable<any[]> {
    return this.http.get<any[]>(`api/exercicesportifmanagement/findExerciceSportifs`);
  }

  getExerciceSportiflocation(ishome : boolean): Observable<any[]> {
    return this.http.get<any[]>(`api/exercicesportifmanagement/findExerciceSportiflocation/${ishome}`);
  }
  getExerciceSportif(idExerciceSportif:number): Observable<any> {
    return this.http.get<any>(`api/exercicesportifmanagement/findExerciceSportif/${idExerciceSportif}`);
  }
  createExerciceSportif(exsprt: any, file: File):  Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `api/exercicesportifmanagement/createExerciceSportif/${exsprt.homeexercice}/${exsprt.description}/${exsprt.niveau}/${exsprt.type}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  updateExerciceSportif(exsprt: any, file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('PUT', `api/exercicesportifmanagement/updateExerciceSportif/${exsprt.idExercice}/${exsprt.homeexercice}/${exsprt.description}/${exsprt.niveau}/${exsprt.type}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);  }
    updateExerciceSportifwithoutfile(ExerciceSportif: any): Observable<any> {
      return this.http.put<any>(`api/exercicesportifmanagement/updateExerciceSportifwithoutfile`, ExerciceSportif);
    }
  deleteExerciceSportif(idExerciceSportif:number): Observable<any> {
    return this.http.delete<String>(`api/exercicesportifmanagement/deleteExerciceSportif/${idExerciceSportif}`);
  }
  updateAffectExerciceSportif(ExerciceSportif: any): Observable<any> {
    return this.http.put<any>(`api/usersmanagement/updatelistexerciceassociated`, ExerciceSportif);
  }
  getAffectExerciceSportif(cleintid:string): Observable<any[]> {
    return this.http.get<any>(`api/usersmanagement/findclientexercices/${cleintid}`);
  }
  deleteAffectExerciceSportif(cleintid:string): Observable<any> {
    return this.http.delete<any>(`api/usersmanagement/deletelistexerciceassociated/${cleintid}`);
  }
}
