import { TestBed } from '@angular/core/testing';

import { IMCService } from './imc.service';

describe('IMCService', () => {
  let service: IMCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
