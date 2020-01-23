import { TestBed } from '@angular/core/testing';

import { WetService } from './wet.service';

describe('WetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WetService = TestBed.get(WetService);
    expect(service).toBeTruthy();
  });
});
