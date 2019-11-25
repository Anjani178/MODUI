import { Component } from '@angular/core';
import { LogiService } from './Service/logi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngEdustage';
  constructor(private myservice : LogiService,private router:Router){}
  isMentor(){
    if(localStorage.getItem('role') ==="Mentor"){
      return 1;
    }
    else if(localStorage.getItem('role') ==="User")
    {
      return 2;
    }
    else{
      return 3
    }
  
  }
  isLogin(){
    if(localStorage.getItem('login')==="yes"){
      return true;
    }
    else{
      return false;
    }
  }
  logoutUser(){
    localStorage.removeItem('role')
    localStorage.removeItem('login')
    this.router.navigate(['/login'])
  }
}
