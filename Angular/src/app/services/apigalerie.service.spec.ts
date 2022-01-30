import { TestBed } from '@angular/core/testing';

import { ApigalerieService } from './apigalerie.service';

describe('ApigalerieService', () => {
  let service: ApigalerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigalerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
