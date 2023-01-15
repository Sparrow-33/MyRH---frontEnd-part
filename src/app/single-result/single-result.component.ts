import { Component } from '@angular/core';
import {ResultService} from "../services/result.service";

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent {
    constructor( public result :ResultService) {
    }
}
