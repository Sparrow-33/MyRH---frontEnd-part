import { Component } from '@angular/core';
import {ResultService} from "../services/result.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor(public result :ResultService) {
  }

}
