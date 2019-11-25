import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { UserObj } from '../models/user-obj';
import { MentorObj } from '../models/mentor-obj';
import { SkillService } from '../Service/skill.service';
import { Skill } from '../models/skill';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';
import { MentorService } from '../Service/mentor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  item:UserObj;
  list:UserObj[];
  item1:MentorObj;
  list1:MentorObj[];
  list2:Skill[];
  item2:Skill;
  lists:Skill[];
  items:Skill;
  list3:Training[];
  item3:Training;
  // item2:Skill;
  // list2:Skill[];
  val1="";
  msg:string;
  msg1:any;

  itemM:MentorObj;
  listM:MentorObj[];
  ed;
  sid;
  
  s:Skill
  SU:Skill[];
  submitted = false;

  constructor(private service:AdminService,private fb:FormBuilder,private skill:SkillService,private trainingSer:TrainingService,private uservice:UserService,private mservice:MentorService) {
    this.s = new Skill();
    this.items = new Skill();
     this.itemM= new MentorObj();
  }

  User(){
    this.val1="User";
    this.service.getUsers().subscribe(k=>this.list=k)
  }
  Mentor(){
    this.val1="Mentor"
    this.service.getMentor().subscribe(data=>this.list1=data)
  }
  Skill(){
    this.val1="Skill"
    this.skill.GetSkills().subscribe(data=>this.list2=data)
  }
  Training(){
    this.val1="Training"
    this.trainingSer.GetAll().subscribe(data=>this.list3=data)
  }
  deleteUser(id){
    this.uservice.Delete(id).subscribe(data=>this.msg=data)
    console.log(this.msg);

  }
  deleteMentor(id){
    this.mservice.Delete(id).subscribe(data=>this.msg=data)
    console.log(this.msg);

  }
  blockU(id){
    this.uservice.Block(id).subscribe(data=>this.msg=data)
    console.log(this.msg);
  }
  blockM(id){
    this.mservice.Block(id).subscribe(data=>this.msg=data)
    console.log(this.msg);
  }
  e(id,name,toc,prereq,fees,duration){
    this.ed=1;
    this.s.sId=id;
    this.s.sName=name;
    this.s.toc=toc;
    this.s.preReq=prereq;
    this.s.fees=fees;
    this.s.duration=duration;
  }
  checkE(){
    if(this.ed==1){
      return 1;
    }else if(this.ed){
      return 2;
    }
    else 3;
  }
check(){
    if(this.val1=="User"){
      return 1;
    }
    else if(this.val1=="Mentor"){
      return 2;
    }
    else if(this.val1=="Skill"){
      return 3;
    }
    else if(this.val1=="Training"){
      return 4;
    }
    else return 0;
  }
  saveSkill(){
    this.skill.Update(this.s).subscribe(data=>this.msg1=data);
    console.log(this.msg);
    alert('Item Saved\n\n');
    this.ed=0;
    this.Skill()
  }
  cancel(){
    this.ed=0;
  }
  DeleteSkill(id){
    this.skill.Delete(id).subscribe(data=>this.msg=data)
    console.log(this.msg);
  }
  neu(){
    if(this.ed!=2){
    this.ed=2;
    }
    else{
      this.ed=0;
    }
  }
  AddNew(){
    this.skill.Add(this.items).subscribe(data=>this.msg1=data);
    console.log(this.msg);
    alert('Item Saved\n\n');
    this.ed=0;
    
  }
  DeleteT(id){
    this.trainingSer.Delete(id).subscribe(data=>this.msg=data)
    console.log(this.msg);
  }
  ngOnInit() {
      this.check()
  }

  

}
