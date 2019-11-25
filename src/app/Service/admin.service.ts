import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  path:string='http://localhost:10512/';

  constructor(private _client:HttpClient) { }
  public getUsers():Observable<any>
  {
    return this._client.get<any>(this.path+'User/Getall');
  }

  public getMentor():Observable<any>
  {
    return this._client.get<any>(this.path+'Mentor/GetallM');
  }

}
