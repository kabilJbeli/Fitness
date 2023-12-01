import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIngredentComponent } from './liste-ingredent.component';

describe('ListeIngredentComponent', () => {
  let component: ListeIngredentComponent;
  let fixture: ComponentFixture<ListeIngredentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeIngredentComponent]
    });
    fixture = TestBed.createComponent(ListeIngredentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
