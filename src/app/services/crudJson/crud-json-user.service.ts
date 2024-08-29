import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudJsonUserService {
  //1- npm install -g json-server

  //2-Create a db.json file in your project root with the following content:
  // json
  // Copy code
  // {
  //   "users": []
  // }

  //3- json-server --watch db.json

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
