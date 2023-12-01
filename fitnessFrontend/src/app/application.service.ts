import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('/api/usersmanagement/findUsers');
  }

  getclientadmin(): Observable<any[]> {
    return this.http.get<any[]>('/api/usersmanagement/adminclient');
  }

  getclientnutro(key: String): Observable<any[]> {
    return this.http.get<any[]>(`/api/usersmanagement/nutroclient/${key}`);
  }

  getclientcoach(key: String): Observable<any[]> {
    return this.http.get<any[]>(`/api/usersmanagement/coachclient/${key}`);
  }
  getUser(key: string): Observable<any> {
    return this.http.get<any>(`/api/usersmanagement/findUser/${key}`);
  }

  
  getUserpackage(key: string): Observable<any> {
    return this.http.get<any>(`/api/usersmanagement/finduserpackages/${key}`);
  }


  createUser(user: any): Observable<any> {
    return this.http.post<any>('/api/usersmanagement/userCreation', user);
  }

  updateUser(user: any): Observable<any> {
    console.log(user);
    return this.http.put<any>("/api/usersmanagement/updateUser", user);
  }

  enableDisable(keycloak: string): Observable<any> {
    return this.http.put<String>('/api/usersmanagement/disableenable', keycloak);
  }

  deleteUser(keycloak: string): Observable<any> {
    return this.http.delete<String>(`/api/usersmanagement/deleteUser/${keycloak}`);
  }

  updatepassword(user: any): Observable<any> {
    return this.http.put<any>('/api/usersmanagement/updatePassword', user);
  }

}
