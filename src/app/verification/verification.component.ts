import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
      Code = {
        code : ""
      }
      constructor(private http :HttpClient) {
      }

      verify() {
        return this.http.post("http://localhost:8081/api/auth/verification", this.Code).subscribe(
          (res) => {
             console.log("SUCCESSFUL")
          },
          (error) => {
            console.log();
          }
        )
      }
}
