import { TestBed } from '@angular/core/testing';

import { CoiffureService } from './coiffure.service';

describe('CoiffureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoiffureService = TestBed.get(CoiffureService);
    expect(service).toBeTruthy();
  });
});
