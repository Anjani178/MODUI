import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MentorObj} from '../models/mentor-obj'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../must-match.validator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  path:string='http://localhost:10512/Mentor';
  constructor(private client:HttpClient) { }

  public Add(item:MentorObj):Observable<any>
  {
    // this.client.post(this.path+'/Add',item).toPromise().then((data:any) => {console.log(data)})
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string){
    return this.client.delete<any>(this.path+'/delete/'+id)
  }

  public Block(id:string){
    return this.client.put<any>(this.path+'/Block/'+id,id)
  }


  // constructor(private http:HttpClient,private route: Router){
  // }
  // //mvserv1(empid,empname,empsal,addr,num){
  //   mserv(email,technologies,facilities,experience,timeStart,timeEnd,url,number,password){

  //    const  e2= new MentorObj(email,technologies,facilities,experience,timeStart,timeEnd,url,number,password);

  //    this.http.post('http://localhost:8091/api/info',e2).toPromise()
  //    .then((data:any) => {
  //      console.log(data)
  //      if(data.value===422){
  //        this.route.navigate(['/signUp/mentorSignUp']);
         
  //        alert('DUPLICATE EMAIL :-)\n\n')
  //      }
  //      else{
  //       localStorage.setItem('token',data.token)
  //      this.route.navigate(['/login']);
  //        alert('SUCCESS!! :-)\n\n')
  //   }
  // });
  }