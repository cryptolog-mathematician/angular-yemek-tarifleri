import { TestBed } from '@angular/core/testing';

import { BorekTarifleriService } from './borek-tarifleri.service';

describe('BorekTarifleriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorekTarifleriService = TestBed.get(BorekTarifleriService);
    expect(service).toBeTruthy();
  });
});
