import { Injectable } from '@angular/core';
import { ICard } from '../interfaces/i-card';
import { Subject } from 'rxjs';
import { tryParse } from 'selenium-webdriver/http';
import { CardsDeckService } from './cards-deck.service';

@Injectable({
  providedIn: 'root'
})
export class CardHandModelService {

  private _cardsDeck:Array<ICard>;
  
  private _suit:string;
  private _numOfCards:number;
  private _maxCardValue:number;
  private _minCardValue:number;

  private _dataEmitter:Subject<any> = new Subject();

  constructor( private _cardsDeckService:CardsDeckService ) {}

  setDefaults = () => {
    this._suit = "";
    this._numOfCards = 52;
    this._maxCardValue = 13;
    this._minCardValue = 1;
    this.update();
  }

  setSuitFilter = ( data:string ) => {
    this._suit = data;
  }

  setNumOfCardsFilter = ( data:number ) => {
    this._numOfCards = data;
  }

  setMaxCardValueFilter( data:number  ) {
    this._maxCardValue = data;
  }

  setMinCardValueFilter( data:number  ) {
    this._minCardValue = data;
  }

  shuffle = () => {
    this._cardsDeck = this._cardsDeckService.getFullDeck().sort( () => { return Math.random() - Math.random()} );
    this.update();
  }

  private update = () => {
    this._dataEmitter.next( this.applyFilters() );
  }

  private applyFilters = () => {
    let newData:Array<ICard>;
    let count:number = 0;

    if( !this._cardsDeck ) {
      this._cardsDeck = this._cardsDeckService.getFullDeck();
    }

    newData = this._cardsDeck.filter( item => {
      if( this._suit && item.suit !== this._suit ) {
        return false;
      }

      if( count >= this._numOfCards ) {
        return false;
      }

      if( item.val < this._minCardValue || item.val > this._maxCardValue ) {
        return false;
      }

      count++;
      return true;

    });

    return newData;
  }

  getCardsHand = () => {
    return this._dataEmitter.asObservable();
  }
}
