import { Component, OnInit } from '@angular/core';
import { CardHandModelService } from 'src/app/services/card-hand-model.service';
import { ICard } from 'src/app/interfaces/i-card';

@Component({
  selector: 'cards-hand',
  templateUrl: './cards-hand.component.html',
  styleUrls: ['./cards-hand.component.scss']
})
export class CardsHandComponent implements OnInit {

  cardsHand:Array<ICard> = [];
  
  constructor( private _cardHandModel: CardHandModelService) { }

  ngOnInit() {
    this._cardHandModel.getCardsHand().subscribe( data => {
      console.log( "data: ", data );
      this.cardsHand = data;
    });
    this._cardHandModel.setDefaults();
  }

}
