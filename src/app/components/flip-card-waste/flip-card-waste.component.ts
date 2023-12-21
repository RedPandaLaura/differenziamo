import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ElementCard} from "../../interfaces/utils.interface";
import {nodeNameForError} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";


@Component({
  selector: 'app-flip-card-waste',
  templateUrl: './flip-card-waste.component.html',
  styleUrls: ['./flip-card-waste.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipCardWasteComponent implements OnInit {

  @Input() elementInfo: ElementCard;
  @Output() elementCheck: EventEmitter<string> = new EventEmitter<string>();

  flip: string = 'inactive';
  infoLabel: string = '';
  correctLabel: string = "Correct!";
  wrongLabel: string = "Wrong!";
  elementGoes: string = "This goes on ";

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if (this.elementInfo.selectedBin !== ""){
      this.createLabel();
    }
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  setCheckbox(id: string){
    this.elementCheck.emit(id);
  }

  createLabel(){
    this.infoLabel = this.elementInfo.selectedBin === this.elementInfo.correctBin ?
      `${this.correctLabel} ${this.elementGoes} ${this.elementInfo.correctBin}` : `${this.wrongLabel} ${this.elementGoes} ${this.elementInfo.correctBin}`
  }
}
