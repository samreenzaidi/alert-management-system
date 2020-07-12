import { TestBed } from '@angular/core/testing';

import { AmsServiceService } from './ams-service.service';

describe('AmsServiceService', () => {
  let service: AmsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
