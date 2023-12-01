import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAffectionExcerciceComponent } from './list-affection-excercice.component';

describe('ListAffectionExcerciceComponent', () => {
  let component: ListAffectionExcerciceComponent;
  let fixture: ComponentFixture<ListAffectionExcerciceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAffectionExcerciceComponent]
    });
    fixture = TestBed.createComponent(ListAffectionExcerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
