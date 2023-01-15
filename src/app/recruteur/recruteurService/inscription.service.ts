import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InscriptionModel} from "../model/inscription.model";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor( private http :HttpClient) { }

  public addRecruteur( inscription :FormData) {
    return this.http.post("http://localhost:8081/api/auth/register", inscription);
  }
}
