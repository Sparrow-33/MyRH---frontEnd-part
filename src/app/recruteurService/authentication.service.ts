import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const ROOT_URL :String = "http://localhost:8081/";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http :HttpClient) { }


    user = {
      email:"",
      password:""
    }

  login() {
    return this.http.post( ROOT_URL+"api/auth/recruteur",
    this.user )
      .subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }
}
