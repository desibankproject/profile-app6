import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   private pdata=[];

   private imageURI:string="";

   

   constructor(private http: HttpClient) {
    
   }

   //When we want to bring data from rest api 
   //at the time of loading this component then we should 
   //write out code inside below method
  ngOnInit() {
    const endpoint =AppConfig.FIND_PROFILES_ENDPOINT;
    this.imageURI=AppConfig.FIND_PROFILES_IMAGE_ENDPOINT;
    endpoint
    //Here we have to make rest call using HttpClient
    //
     let p:Observable<any>=this.http.get(endpoint);
     //hey  I want to object    
     p.subscribe(data=> {
         console.log(data);
         this.pdata=data;
     });
  
  }

}
