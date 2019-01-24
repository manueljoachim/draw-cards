import { Component } from '@angular/core';
import { CardHandModelService } from 'src/app/services/card-hand-model.service';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {

  constructor( private _cardsHandModel: CardHandModelService) { }

  setSuitFilter( data ) {
    this._cardsHandModel.setSuitFilter( data );
  }

  setCardsNumFilter( data ) {
    this._cardsHandModel.setNumOfCardsFilter( data );
  }

  setMaxCardValueFilter( data ) {
    this._cardsHandModel.setMaxCardValueFilter( data );
  }

  setMinCardValueFilter( data ) {
    this._cardsHandModel.setMinCardValueFilter( data );
  }


  draw = ( evt ) => {
    evt.preventDefault();

    this._cardsHandModel.shuffle();
  }



}
