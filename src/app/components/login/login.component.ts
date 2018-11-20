import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConfig } from 'src/app/config/app.config';
import { Observable } from 'rxjs';


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
  constructor(private router: Router,private http: HttpClient) {
     //this.router=router;
   }


   public log(x):void {
     console.log(x);
   }

  ngOnInit() {
  }

  public authUser() :void {
   // if(this.username=="jack" && this.password=="jill"){
      const endpoint =AppConfig.AUTH_ENDPOINT;

      //Means we are sending JSON Data
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      var user={username:this.username,password:this.password};
      let p:Observable<any>=this.http.post(endpoint,user,httpOptions);
      //hey  I want to object    
      p.subscribe(data=> {
          console.log(data);
          if(data.status=="success"){
            this.router.navigate(['dashbaord']);   
          }else{
            this.message=data.message;
          }
          //this.pdata=data;
      });

       //this.message="Hey! you are a valid user";
       //Hey I want to go to dashbaord component
    
    //}else{
      
    //  }

  }

}
