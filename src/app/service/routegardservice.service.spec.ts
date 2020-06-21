import { TestBed } from '@angular/core/testing';

import { RoutegardserviceService } from './routegardservice.service';

describe('RoutegardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutegardserviceService = TestBed.get(RoutegardserviceService);
    expect(service).toBeTruthy();
  });
});
