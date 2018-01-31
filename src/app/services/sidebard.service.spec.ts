import { TestBed, inject } from '@angular/core/testing';

import { SidebardService } from './sidebard.service';

describe('SidebardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebardService]
    });
  });

  it('should be created', inject([SidebardService], (service: SidebardService) => {
    expect(service).toBeTruthy();
  }));
});
