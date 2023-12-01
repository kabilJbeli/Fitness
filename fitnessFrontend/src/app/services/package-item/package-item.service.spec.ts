import { TestBed } from '@angular/core/testing';

import { PackageItemService } from './package-item.service';

describe('PackageItemService', () => {
  let service: PackageItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
