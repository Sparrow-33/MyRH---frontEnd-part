import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }
  // @ts-ignore
  title :String = null;

  changeTitle():void {
     this.title = (Math.random() + 1).toString(36).substring(7);
  }
}
