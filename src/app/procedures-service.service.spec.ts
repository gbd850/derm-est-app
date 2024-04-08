import { TestBed } from '@angular/core/testing';

import { ProceduresServiceService } from './procedures-service.service';

describe('ProceduresServiceService', () => {
  let service: ProceduresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceduresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
