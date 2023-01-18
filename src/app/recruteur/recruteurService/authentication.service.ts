import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

 const ROOT_URL :String = "http://localhost:8081/";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http :HttpClient, private router :Router) { }


    user = {
      email:"",
      password:""
    }

  login() {
    return this.http.post( ROOT_URL+"api/auth/recruteur",
    this.user )
      .subscribe(
      res => {
        // @ts-ignore
        localStorage.setItem("token", res[0].token);
        // @ts-ignore
        localStorage.setItem("id", res[1].id);
        this.router.navigate(["/createPost"]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
