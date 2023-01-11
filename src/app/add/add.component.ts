import { Component } from '@angular/core';
import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor( public _shared :SharedService) {
  }

  hero = {
    name : "",
    power : 0,
    ImgURL : ""
  };


  add():void {
    this._shared.heros.push(this.hero);
    this.hero = {
      name : "",
      power : 0,
      ImgURL : ""
    };
  }
}
