import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppConfig } from '../config/app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public findProfiles() : Observable<any>{
    const endpoint =AppConfig.FIND_PROFILES_ENDPOINT;
     return this.http.get(endpoint);
  }
  
  public deleteData(profile) :Observable<any> {
    const endpoint =AppConfig.DELETE_PROFILES_ENDPOINT;
    return this.http.delete(endpoint+profile._id);
  }
}
