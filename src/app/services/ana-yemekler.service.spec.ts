import { TestBed } from '@angular/core/testing';

import { AnaYemeklerService } from './ana-yemekler.service';

describe('AnaYemeklerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnaYemeklerService = TestBed.get(AnaYemeklerService);
    expect(service).toBeTruthy();
  });
});
