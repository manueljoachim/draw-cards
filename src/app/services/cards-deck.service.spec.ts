import { TestBed } from '@angular/core/testing';

import { CardsDeckService } from './cards-deck.service';

describe('CardsDeckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsDeckService = TestBed.get(CardsDeckService);
    expect(service).toBeTruthy();
  });
});
