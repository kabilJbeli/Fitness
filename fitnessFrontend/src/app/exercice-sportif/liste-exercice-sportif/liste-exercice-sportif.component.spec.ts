import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExerciceSportifComponent } from './liste-exercice-sportif.component';

describe('ListeExerciceSportifComponent', () => {
  let component: ListeExerciceSportifComponent;
  let fixture: ComponentFixture<ListeExerciceSportifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeExerciceSportifComponent]
    });
    fixture = TestBed.createComponent(ListeExerciceSportifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
