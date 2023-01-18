import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }
  // @ts-ignore
  title :String = null;
   single:any;
   offre = {
     title:"",
     ville:"",
     recruteur:"",
     niveau:"",
     experience:"",
     description:""

   }

  changeTitle():void {
     this.title = (Math.random() + 1).toString(36).substring(7);
  }

  getSingleOffre(id:any) {
    return  this.http.get("http://localhost:8081/offre/getSingle/"+id).subscribe(
      res => {
        this.single = res;
        this.offre.title = this.single.title;
        this.offre.ville = this.single.ville;
        this.offre.recruteur = this.single.recruteur.nom;
        this.offre.niveau = this.single.recruteur.niveau;
        this.offre.experience = this.single.profile;
        this.offre.description = this.single.description;
        console.log(this.single.title)
      },
      error => {
        console.log(false)
      }
    )

  }

  getAllResults() {
    return  this.http.get("http://localhost:8081/offre/getAll")
  }



}
