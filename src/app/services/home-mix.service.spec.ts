import { TestBed } from '@angular/core/testing';

import { HomeMixService } from './home-mix.service';

describe('HomeMixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeMixService = TestBed.get(HomeMixService);
    expect(service).toBeTruthy();
  });
});
