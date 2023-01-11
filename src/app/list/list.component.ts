import { Component } from '@angular/core';
import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public shared :SharedService) {
  }
}
