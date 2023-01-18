import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {OffreModel} from "../recruteur/model/offre.model";

@Component({
  selector: 'app-create-offre',
  templateUrl: './create-offre.component.html',
  styleUrls: ['./create-offre.component.css']
})
export class CreateOffreComponent {



  offre :OffreModel = {
    // @ts-ignore
    recruteur_id :localStorage.getItem("id"),
    title:"",
    description:"",
    profile:"",
    niveau:"",
    salaire:"",
    ville:"",
    candidature:0,
    status: false

  }

  constructor( private http:HttpClient) {}

   headers_object = new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem("token"));
   httpOptions = {
    headers: this.headers_object
  };
  addOffre() {
    console.log(localStorage.getItem("id"));
    console.log(this.offre);
    this.http.post("http://localhost:8081/offre/addOffre", this.offre, this.httpOptions).subscribe(
      res => {
        console.log(true);
      },
      error => {
        console.log(error);
        console.log(false);
      }
    );
  }

}
