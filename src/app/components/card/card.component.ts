import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() suit:string;
  @Input() val:number
  @Input() code:string;

  constructor() { }

  getClasses = () => {
    return this.code + " " + this.suit.toLowerCase();
  }

}
