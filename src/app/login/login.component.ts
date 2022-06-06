import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  
  isAdmin = false;
  
  constructor(   private router:Router ) { }

  ngOnInit(): void {
  }

  LoginUser(){
    console.log("FUNC")
    if(this.username == "Admin" && this.password == "123"){
      this.isAdmin = true;
      console.log("ADMIN")
      this.router.navigate(["/dashboard"]);
    }
    else if (this.username == "Learner" && this.password == "123"){
      this.isAdmin = false;
    }
  }

}
