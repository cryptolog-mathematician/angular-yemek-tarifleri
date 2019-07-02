import { TestBed } from '@angular/core/testing';

import { AparatifYemeklerService } from './aparatif-yemekler.service';

describe('AparatifYemeklerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AparatifYemeklerService = TestBed.get(AparatifYemeklerService);
    expect(service).toBeTruthy();
  });
});
