import { TestBed } from '@angular/core/testing';

import { GifCardService } from './gif-card.service';

describe('GifCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifCardService = TestBed.get(GifCardService);
    expect(service).toBeTruthy();
  });
});
