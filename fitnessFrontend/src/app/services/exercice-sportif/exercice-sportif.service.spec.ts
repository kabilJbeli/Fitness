import { TestBed } from '@angular/core/testing';

import { ExerciceSportifService } from './exercice-sportif.service';

describe('ExerciceSportifService', () => {
  let service: ExerciceSportifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciceSportifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
