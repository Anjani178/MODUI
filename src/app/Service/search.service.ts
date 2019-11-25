import { Injectable } from '@angular/core';
import { MentorObj } from '../models/mentor-obj';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient,private route:Router) { }
  // searches(technologies,timeStart) {
  //   const s1 = new search(technologies,timeStart);
  //   this.http.post('http://localhost:8091/api/search',s1).toPromise()
  //   .then((data:any)=>{
  //     console.log(data);
  //     this.route.navigate(['/sResult']);
  //   });
}
