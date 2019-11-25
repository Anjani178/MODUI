import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserObj} from '../../app/models/user-obj'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MentorObj } from '../models/mentor-obj';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  path:string='http://localhost:10512/User';
  constructor(private client:HttpClient) { }

  public Add(item:UserObj):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string){
    return this.client.delete<any>(this.path+'/delete/'+id)
  }
  public Block(id:string){
    return this.client.put<any>(this.path+'/Block/'+id,id)
  }
  // public SearchN(tech:String,ts:string){
  //   this.tech = tech;
  //   this.ts=ts;
  // }
  // public Search(tech:string,ts:string):Observable<MentorObj[]>{
  //   return this.client.get<MentorObj[]>(this.path+'/Search/'+tech+'/'+ts)
  // }
  public Search(tech:string, ts:string):Observable<MentorObj[]>{
    return this.client.get<MentorObj[]>(this.path+'/Search/'+tech+'/'+ts)
  }
//   private _specialEventUrl ="http://localhost:8091/api/userD";
//   id;

//   constructor(private http:HttpClient,private route:Router){
//   }

//   getSpecialEvents(){
//     return this.http.get<any>(this._specialEventUrl)
//   }
//   //mvserv1(empid,empname,empsal,addr,num){
//     mvserv1(email,password){

//      const  e1= new UserObj(email,password)

//     this.http.post('http://localhost:8091/api/info',e1).toPromise()
//     .then((data:any) => {
//       console.log(data)
//       if(data.value===422){
//         this.route.navigate(['/signUp/userSignUp']);
        
//         alert('DUPLICATE EMAIL :-)\n\n')
//       }
//       else{
//       this.route.navigate(['/login']);
//       localStorage.setItem('token',data.token)
//         alert('SUCCESS!! :-)\n\n')
//     }
//   });
//   }
}
