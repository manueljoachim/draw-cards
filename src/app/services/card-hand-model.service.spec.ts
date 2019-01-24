import { TestBed } from '@angular/core/testing';

import { CardHandModelService } from './card-hand-model.service';

describe('CardHandModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardHandModelService = TestBed.get(CardHandModelService);
    expect(service).toBeTruthy();
  });
});
