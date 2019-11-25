import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchService } from '../Service/search.service';
import { MentorObj } from '../models/mentor-obj';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  technologies;
  timeSlot;
  list : MentorObj[] =[]
  s;
  // search1(){
  //   this.s=this.sservice.searches(this.technologies,this.timeStart)
  //   // this.route.navigate(['/signUp']);
  // }
  constructor( private route:Router,private uservice:UserService,private formBuilder : FormBuilder) {
   }
   
  searchNow(){
        localStorage.setItem("tech",this.technologies);
        localStorage.setItem("ts",this.timeSlot);
       //this.uservice.SearchN(this.technologies,this.timeSlot)
      // this.uservice.Search(this.technologies,this.timeSlot).subscribe(k=>this.list=k)
      
       this.route.navigate(["/sResult"]);
  }
  ngOnInit() {
    
  }



}
