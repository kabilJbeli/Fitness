import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExerciceSportifComponent } from './manage-exercice-sportif.component';

describe('ManageExerciceSportifComponent', () => {
  let component: ManageExerciceSportifComponent;
  let fixture: ComponentFixture<ManageExerciceSportifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageExerciceSportifComponent]
    });
    fixture = TestBed.createComponent(ManageExerciceSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
