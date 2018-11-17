import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username:string="";
  private password:string="";
  private message:string="";

  

  //private router: Router;
  /**
   * 
   * @param router 
   * This dependency injection
   */
  constructor(private router: Router) {
     //this.router=router;
   }

  ngOnInit() {
  }

  public authUser() :void {
    if(this.username=="jack" && this.password=="jill"){
       //this.message="Hey! you are a valid user";
       //Hey I want to go to dashbaord component
      this.router.navigate(['dashbaord']);   
    }else{
      this.message="Sorry! username and password are not correct!";
      }

  }

}
