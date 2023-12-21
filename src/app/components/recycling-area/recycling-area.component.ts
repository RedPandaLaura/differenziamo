import {Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges} from '@angular/core';
import {Type, TrashCan, ElementCard} from "../../interfaces/utils.interface";
import trashBinData from "../../json/trashBinData.json";
import trashElements from "../../json/trashElementData.json";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-recycling-area',
  templateUrl: './recycling-area.component.html',
  styleUrls: ['./recycling-area.component.css'],

})
export class RecyclingAreaComponent implements OnInit {
  @Input() gameLevel: number = 0;
  @Output() addScore: EventEmitter<number> = new EventEmitter<number>();

  flip = 'active'

  public trashCans: Array<any>;
  public elements: Array<any>;
  public elementsChecked: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.setTrashCans();
    this.setWasteElements();
  }

  ngOnChanges(changes: SimpleChange){
    if (this.gameLevel === 1 && this.elements.length > 0){
      this.elementsChecked = [];
      for (let el of this.elements){
        el.checked = false;
        el.disabled = false;
        el.selectedBin = '';
      }
    }
  }

  flipCard(event : object) {
    console.log(typeof event);
    // set a value on flipped show A if not show B
  }

  setTrashCans(){
    this.trashCans = trashBinData;
  }

  setWasteElements(){
    this.elements = trashElements;
  }

  setCheckedElement(elementId: string){
    for (let el of this.elements){
      if (el.id === elementId ){
        el.checked = !el.checked;
        el.checked ? this.elementsChecked.push(elementId) : this.elementsChecked.splice(this.elementsChecked.indexOf(elementId), 1)
      }
    }
  }

  sortWasteinBin(bin: Type){
    let internalScore: number = 0;
    if (this.elementsChecked.length > 0){
      for (let id of this.elementsChecked){
        for (let el of this.elements){
          if (id === el.id){
            el.correctBin === bin;
            el.selectedBin = bin;
            el.disabled = true;
            if (el.correctBin === el.selectedBin)
              internalScore++;
          }
        }
      }
      this.elementsChecked = [];
      this.addScore.emit(internalScore);
    }
  }

}
