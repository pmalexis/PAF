import { TestBed } from '@angular/core/testing';

import { CoiffuresService } from './coiffures.service';

describe('CoiffuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoiffuresService = TestBed.get(CoiffuresService);
    expect(service).toBeTruthy();
  });
});
