import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { AppConfig } from 'src/app/config/app.config';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   private pdata=[];

   private imageURI:string="";
   private message:string="";
   

   constructor(private profileService:ProfileService) {
    
   }

   //When we want to bring data from rest api 
   //at the time of loading this component then we should 
   //write out code inside below method
  ngOnInit() {
    const endpoint =AppConfig.FIND_PROFILES_ENDPOINT;
    this.imageURI=AppConfig.FIND_PROFILES_IMAGE_ENDPOINT;
    this.profileService.findProfiles().subscribe(data=> {
        console.log(data);
       this.pdata=data;
   })
       
  }

  public deleteData(profile) :void {
     ///profiles/:mid
     console.log(profile);
     //hey  I want to object    
     this.profileService.deleteData(profile).subscribe(data=> {
         console.log(data);
         if(data.status=="success"){
            this.pdata=this.pdata.filter(t =>t._id!=profile._id);
         }
         this.message=data.message;  

      });
  }

}
