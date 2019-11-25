import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Training } from '../models/training';
import { MentorObj } from '../models/mentor-obj';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  tr:Training
  men :MentorObj
  fees : number
  path:string='http://localhost:10512/';
  constructor(private client:HttpClient) { }

  training(tr:Training,men:MentorObj,fees){
    this.tr = tr
    this.men = men
    this.fees = fees
  }
  public Add():Observable<any>
  {
    return this.client.post<any>(this.path+'Training/Add',this.tr)
  }
  public GetAll():Observable<Training[]>
  {
    return this.client.get<Training[]>(this.path+'Training/GetAll')
  }
  public Delete(id:string){
    return this.client.delete<any>(this.path+'Training/delete/'+id)
  }
  public paymentAdd(item:Payment){
    return this.client.post<any>('http://localhost:1970/api/Payment/Add/',item)
  }
  public Update(id,rating):Observable<any>{
    return this.client.put<any>(this.path+'Training/Update/'+rating,id)
  }
}
