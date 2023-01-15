import { Component } from '@angular/core';
import {InscriptionService} from "../recruteur/recruteurService/inscription.service";
import {InscriptionModel} from "../recruteur/model/inscription.model";
import {NgForm} from "@angular/forms";
import {FileHandler} from "../recruteur/model/file-handler.model";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  recruteur :InscriptionModel = {
    nom : "",
    email: "",
    password:"",
    telephone:"",
    image: []
  }
  constructor( public _register: InscriptionService) {}

  register( inscriptionForm :NgForm) {
   const recruteurFormData =  this.prepareFormData(this.recruteur)
    this._register.addRecruteur(recruteurFormData).subscribe(
      (response) => {
         console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

  prepareFormData( recrueteur :InscriptionModel) :FormData{
      const formData = new FormData();
      formData.append(
        'recruteur',
        new Blob([JSON.stringify(recrueteur)], {type: 'application/json'})
      );
      formData.append(
        'ImageFile',
        recrueteur.image[0].file,
        recrueteur.image[0].file.name

  );
    console.log(formData.get("ImageFile"));
    return formData;
  }

  onFileSelected(event:any) {
    if (event.target.files) {
      const files = event.target.files[0];
      const fileHandler :FileHandler = {
        file: files
      }
      this.recruteur.image.push(fileHandler);
    }
  }
}
