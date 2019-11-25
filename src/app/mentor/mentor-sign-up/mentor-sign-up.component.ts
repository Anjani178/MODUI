import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/Service/mentor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/must-match.validator';
import { MentorObj } from 'src/app/models/mentor-obj';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
  item:MentorObj;
  list:MentorObj[];
  msg:any;
  MregForm: FormGroup;
  submitted = false;
  re_password;
  constructor(private mservice:MentorService, private route: Router, private formBuilder:FormBuilder) { 
    this.item = new MentorObj();

  }
  ngOnInit() {
    this.MregForm = this.formBuilder.group({
      mUserName: ['', [Validators.required, Validators.maxLength(15),Validators.pattern('^[a-zA-Z ]*$')]],
       mEmail: ['', [Validators.required, Validators.email]],
       mPassword: ['', [Validators.required, Validators.minLength(4)]],
       re_password: ['', Validators.required],
       technologies: ['', Validators.required],
       facilities: ['', Validators.required],
       yearOfExperience: ['', Validators.required],
       timeSlot: ['', Validators.required],
       linkedinUrl: ['', Validators.required],
       contact: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10)]]
     }, 
     {
         validator: MustMatch('mPassword', 're_password')
     });
 }
 get f() { return this.MregForm.controls; }

 onSubmit() {
   this.submitted = true;

   // stop here if form is invalid
   if (this.MregForm.invalid) {
    this.item.contact="";
    this.item.facilities="";
    this.item.linkedinUrl="";
    this.item.mEmail="";
    this.item.mPassword="";
    this.item.mUserName="";
    this.item.technologies="";
    this.item.timeSlot="";
    this.item.yearOfExperience="";
    this.re_password="";
       return;
   }
   else{
     this.mservice.Add(this.item).subscribe(k=>this.msg=k);
     console.log(this.msg);
    alert('SUCCESS!! :-)\n\n')
    this.route.navigate(['/login']);
//       this.route.navigate(['/login']);
 }
 this.item.contact="";
 this.item.facilities="";
 this.item.linkedinUrl="";
 this.item.mEmail="";
 this.item.mPassword="";
 this.item.mUserName="";
 this.item.technologies="";
 this.item.timeSlot="";
 this.item.yearOfExperience="";
 this.re_password="";

  }
}
