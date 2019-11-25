import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { MentorObj } from '../models/mentor-obj';
import { Router } from '@angular/router';
import { SkillService } from '../Service/skill.service';
import { Skill } from '../models/skill';
import { Training } from '../models/training';
import { TrainingService } from '../Service/training.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sresults',
  templateUrl: './sresults.component.html',
  styleUrls: ['./sresults.component.css']
})
export class SresultsComponent implements OnInit {
  item:MentorObj;
  list:MentorObj[];
  item1:Skill;
  list1:number[] = [];
  skillId:string[]=[]
  toc:string[]=[];
  preReq:string[]=[];
  dur:string[]=[]
  tr1:Training
  msg:any;
  count;
  tech= localStorage.getItem("tech");
  ts =localStorage.getItem("ts");
  i=1;
  currDate = new Date();
  

  constructor(private us:UserService,private route:Router,private skill:SkillService,private trServ:TrainingService) {
    this.tr1 = new Training();
  }

  book(x:string,tech:string,sid,d,item:MentorObj,fees){
    if(localStorage.getItem("login")=="yes"){
    this.tr1.mid=x;
    this.tr1.tName = tech + "Training"
    this.tr1.status = "Ongoing"
    this.tr1.progress = "0%"
    this.tr1.rating = 0.0
    this.tr1.timeDuration = parseInt(d);
    this.tr1.commissionFee =0;
    this.tr1.startDate =  new Date()
    this.tr1.endTime = new Date(this.currDate.setDate(this.currDate.getDate()+parseInt(d)))
    this.tr1.uid = localStorage.getItem("ID");
    this.tr1.tId = "T"+ Math.round((Math.random()*9000));
    this.tr1.sId=sid
    this.trServ.training(this.tr1,item,fees)
    this.route.navigate(["/payment"])
    }
    else{
      alert("Please Login to proceed!!")
      this.route.navigate(['/login'])
    }
  }
  // check(){
  //   if(localStorage.getItem("Added")=="yes"){
  //     this.route.navigate(["/payment"])
  //   }
  // }
  ngOnInit() {
    this.us.Search(this.tech,this.ts).subscribe(k=>{
      this.list=k;
      k.forEach(element => {
        console.log(element)
            this.skill.getName(element.technologies).subscribe(j=>{
                if(j!=null){
                  this.list1.push(j.fees)
                  this.skillId.push(j.sId)
                  this.toc.push(j.toc)
                  this.preReq.push(j.preReq)
                  this.dur.push(j.duration)
                }
                else{
                  this.list1.push(null)
                }})
      });
      if(this.list1){
        this.count= k.length;
      }
      else{
        this.count=0;
      }
    });
    // this.skill.getName(this.item.technologies).subscribe(k=>this.item1=k);
  }

}
