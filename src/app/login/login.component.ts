import { Component } from '@angular/core';
import {AuthenticationService} from "../recruteurService/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor( public recruteur :AuthenticationService) {}



}
