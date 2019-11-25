import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  path:string='http://localhost:10512/Skill';
  constructor(private client:HttpClient) { }

  public Add(item:Skill):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public GetSkills():Observable<Skill[]>
  {
    return this.client.get<Skill[]>(this.path+'/GetAll')
  }
  public Update(item:Skill)
  {
    return this.client.put(this.path+'/Update',item)
  }
  public Delete(id:string){
    return this.client.delete<any>(this.path+'/delete/'+id)
  }
  public getName(id:string):Observable<any>{
    return this.client.get<any>(this.path+'/GetName/'+id)
  }

}
