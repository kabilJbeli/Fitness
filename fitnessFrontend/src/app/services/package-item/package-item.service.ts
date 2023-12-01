import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PackageItemService {

  API_URL = environment.serverUrl +'/packageitemmanagement';
  constructor(private http: HttpClient) {}

  getPackageItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/findPackagesItems`);
  }
  getPackageItem(idPackageItem:number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/findPackageItem/${idPackageItem}`);
  }
  createPackageItem(PackageItem: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/createPackageItem`, PackageItem);
  }
  updatePackageItem(PackageItem: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/updatePackageItem`, PackageItem);
  }
  deletePackageItem(idPackageItem:number): Observable<any> {
    return this.http.delete<String>(`${this.API_URL}/deletePackageItem/${idPackageItem}`);
  }
}
