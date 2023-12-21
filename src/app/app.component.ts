import {Component} from '@angular/core';
import {Type, TrashCan} from "./interfaces/utils.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'differenziamo';
  score: number = 0;

  level: number = 0;

  constructor() {
  }

  gameStatus(status: number){
    this.level = status;
    if (status === 0){
      this.score = 0;
    }
  }

  updateScore(addingScore:number){
    this.score = this.score + addingScore;
  }
}
