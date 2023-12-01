import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PackageService {

  API_URL = environment.serverUrl +'/packagemanagement';
  constructor(private http: HttpClient) {}

  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/findPackages`);
  }
  getPackage(idPackage:number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/findPackage/${idPackage}`);
  }
  createPackage(Package: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/createPackage`, Package);
  }
  updatePackage(Package: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/updatePackage`, Package);
  }
  deletePackage(idPackage:any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/deletePackage/${idPackage}`);
  }
  
}
