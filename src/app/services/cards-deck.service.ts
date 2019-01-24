import { Injectable } from '@angular/core';
import { ICard } from '../interfaces/i-card';

@Injectable({
  providedIn: 'root'
})
export class CardsDeckService {

  private _cardsDeck:Array<ICard> = [
    {suit: "S", val: 1, code: "u1F0A1"},
    {suit: "S", val: 2, code: "u1F0A2"},
    {suit: "S", val: 3, code: "u1F0A3"},
    {suit: "S", val: 4, code: "u1F0A4"},
    {suit: "S", val: 5, code: "u1F0A5"},
    {suit: "S", val: 6, code: "u1F0A6"},
    {suit: "S", val: 7, code: "u1F0A7"},
    {suit: "S", val: 8, code: "u1F0A8"},
    {suit: "S", val: 9, code: "u1F0A9"},
    {suit: "S", val: 10, code: "u1F0AA"},
    {suit: "S", val: 11, code: "u1F0AB"},
    {suit: "S", val: 12, code: "u1F0AD"},
    {suit: "S", val: 13, code: "u1F0AE"},

    {suit: "H", val: 1, code: "u1F0B1"},
    {suit: "H", val: 2, code: "u1F0B2"},
    {suit: "H", val: 3, code: "u1F0B3"},
    {suit: "H", val: 4, code: "u1F0B4"},
    {suit: "H", val: 5, code: "u1F0B5"},
    {suit: "H", val: 6, code: "u1F0B6"},
    {suit: "H", val: 7, code: "u1F0B7"},
    {suit: "H", val: 8, code: "u1F0B8"},
    {suit: "H", val: 9, code: "u1F0B9"},
    {suit: "H", val: 10, code: "u1F0BA"},
    {suit: "H", val: 11, code: "u1F0BB"},
    {suit: "H", val: 12, code: "u1F0BD"},
    {suit: "H", val: 13, code: "u1F0BE"},

    {suit: "C", val: 1, code: "u1F0D1"},
    {suit: "C", val: 2, code: "u1F0D2"},
    {suit: "C", val: 3, code: "u1F0D3"},
    {suit: "C", val: 4, code: "u1F0D4"},
    {suit: "C", val: 5, code: "u1F0D5"},
    {suit: "C", val: 6, code: "u1F0D6"},
    {suit: "C", val: 7, code: "u1F0D7"},
    {suit: "C", val: 8, code: "u1F0D8"},
    {suit: "C", val: 9, code: "u1F0D9"},
    {suit: "C", val: 10, code: "u1F0DA"},
    {suit: "C", val: 11, code: "u1F0DB"},
    {suit: "C", val: 12, code: "u1F0DD"},
    {suit: "C", val: 13, code: "u1F0DE"},

    {suit: "D", val: 1, code: "u1F0C1"},
    {suit: "D", val: 2, code: "u1F0C2"},
    {suit: "D", val: 3, code: "u1F0C3"},
    {suit: "D", val: 4, code: "u1F0C4"},
    {suit: "D", val: 5, code: "u1F0C5"},
    {suit: "D", val: 6, code: "u1F0C6"},
    {suit: "D", val: 7, code: "u1F0C7"},
    {suit: "D", val: 8, code: "u1F0C8"},
    {suit: "D", val: 9, code: "u1F0C9"},
    {suit: "D", val: 10, code: "u1F0CA"},
    {suit: "D", val: 11, code: "u1F0CB"},
    {suit: "D", val: 12, code: "u1F0CD"},
    {suit: "D", val: 13, code: "u1F0CE"}
  ];

  getFullDeck = () => {
    return this._cardsDeck.slice();
  }
}
