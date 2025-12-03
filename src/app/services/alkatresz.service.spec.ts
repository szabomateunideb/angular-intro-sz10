import { TestBed } from '@angular/core/testing';

import { AlkatreszService } from './alkatresz.service';

describe('AlkatreszService', () => {
  let service: AlkatreszService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlkatreszService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
