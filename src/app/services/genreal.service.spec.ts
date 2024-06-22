import { TestBed } from '@angular/core/testing';

import { GenrealService } from './genreal.service';

describe('GenrealService', () => {
  let service: GenrealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenrealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
