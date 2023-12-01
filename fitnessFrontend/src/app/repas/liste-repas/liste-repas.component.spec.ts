import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRepasComponent } from './liste-repas.component';

describe('ListeRepasComponent', () => {
  let component: ListeRepasComponent;
  let fixture: ComponentFixture<ListeRepasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRepasComponent]
    });
    fixture = TestBed.createComponent(ListeRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
