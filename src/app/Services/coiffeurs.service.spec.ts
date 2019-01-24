import { TestBed } from '@angular/core/testing';

import { CoiffeursService } from './coiffeurs.service';

describe('CoiffeursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoiffeursService = TestBed.get(CoiffeursService);
    expect(service).toBeTruthy();
  });
});
