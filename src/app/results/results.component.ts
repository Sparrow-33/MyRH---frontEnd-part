import { Component } from '@angular/core';
import {ResultService} from "../services/result.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  offres:any= [];
  constructor(public result :ResultService) {
  }

  ngOnInit() {
    this.result.getAllResults().subscribe(
      res => {
        this.offres = res;
        console.log(this.offres[0]);
      },
      error => {
        console.log(error);
      }
    )
  }



}
