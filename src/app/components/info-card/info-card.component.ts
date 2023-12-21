import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Output() gameStatus: EventEmitter<number> = new EventEmitter();
  @Input() gameLevel: number = 0;
  @Input() score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeGameStatus(level: number){
    console.log(level)
    this.gameStatus.emit(level);
  }

  goToNewPage(){
    window.open('https://www.amsa.it/sites/local.amsa.it/files/2020-12/AMSA-GuidaRaccoltaDifferenziata-Milano.pdf', '_blank')
  }


}
