import { TestBed } from '@angular/core/testing';

import { CrudJsonUserService } from './crud-json-user.service';

describe('CrudJsonUserService', () => {
  let service: CrudJsonUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudJsonUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
