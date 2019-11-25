import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../must-match.validator';
import { Router } from '@angular/router';
import { UserObj } from 'src/app/models/user-obj';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  item:UserObj
  list:UserObj[];
  msg:any;
  usignUp: FormGroup;
  submitted = false;
  cPassword;
  constructor(private formBuilder: FormBuilder,private service:UserService,private router:Router) { 
    this.item = new UserObj();
  }
  ngOnInit() {
            this.usignUp = this.formBuilder.group({
                uEmail: ['', [Validators.required, Validators.email]],
                uPassword: ['', [Validators.required, Validators.maxLength(5)]],
                cPassword:['',[Validators.required]],
                contact:['',[Validators.required,Validators.maxLength(10)]],
            }, {
                validator: MustMatch('uPassword', 'cPassword')
            });
        }
    
        // convenience getter for easy access to form fields
        get f() { return this.usignUp.controls; }
    
        onSubmit() {
            this.submitted = true;
    
            // // stop here if form is invalid
            if (this.usignUp.invalid) {
              this.item.uEmail="";
              this.item.uPassword="";
              this.cPassword=null;
              this.item.contact="";
                return;
            }
            else{
              this.service.Add(this.item).subscribe(k=>this.msg=k);
              alert('Successfull Register!!\n\n');
              this.router.navigate(['/login']);
            }
              this.item.uEmail="";
              this.item.uPassword="";
              this.cPassword=null;
              this.item.contact="";
        }
    }


  
