import { TestBed } from '@angular/core/testing';

import { RetriveService } from './retrive.service';

describe('RetriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetriveService = TestBed.get(RetriveService);
    expect(service).toBeTruthy();
  });
});
