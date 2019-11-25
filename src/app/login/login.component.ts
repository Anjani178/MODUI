import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogiService } from '../Service/logi.service';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id;
  password;
  token:any;
  loginForm: FormGroup;
  constructor(private _service:LogiService,private router:Router,private formBuilder:FormBuilder) { }
  public Login(){
    this._service.login1(this.id,this.password).subscribe(data=>
      {
        console.log(data)
        if(data.message=="User"){
          if(data.active=="True"){
        alert('Successful Login as User '+ data.username+' !!\n\n');
        this.router.navigate(['/userD']);
        localStorage.setItem('login','yes')
        localStorage.setItem('ID',this.id)
        localStorage.setItem('role',data.role)
        localStorage.setItem('Name',data.username)
          }
          else{
            alert("Your account is blocked \n Please visit after few days or contact us")
            this.id="";
        this.password="";
          }
        }
        else if(data.message=="Mentor")
        {
          if(data.active=="True"){
        alert('Successful Login as Mentor '+ data.username +' !!\n\n');
        this.router.navigate(['/mentorD']);
        localStorage.setItem('login','yes')
        localStorage.setItem('ID',this.id)
        localStorage.setItem('role',data.role)
        localStorage.setItem('Name',data.username)
          }
          else{
            alert("Your account is blocked \n Please visit after few days or contact us")
            this.id="";
        this.password="";
          }
        }

        else if(data.message=="Admin")
        {
        alert('Successfull Login as Admin!!\n\n');
        this.router.navigate(['/admin']);
        localStorage.setItem('login','yes')
        localStorage.setItem('role','Admin')
        }

        else
        {
        alert('Retry\n\n');
        this.router.navigate(['/login']);
        this.id="";
        this.password=""
        }
      });
    }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(15)]],
       password: ['', [Validators.required]]
  })
}
  
  }
