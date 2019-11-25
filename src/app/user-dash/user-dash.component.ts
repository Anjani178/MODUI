import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent {

  // specialEvents = []
  Name;
  constructor(private route:Router,private myservice:UserService) {
    this.Name = localStorage.getItem("Name")
   }

  // ngOnInit() {
  //   this.myservice.getSpecialEvents()
  //   .subscribe(
  //     res => this.specialEvents = res,
  //     err =>{
  //       if(err instanceof HttpErrorResponse){
  //         if(err.status === 401){
  //           this.route.navigate(['/login'])
  //         }
  //       }
  //     }
  //   )

    
  // }

}
