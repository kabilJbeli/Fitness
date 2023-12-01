import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAffectionExcerciceComponent } from './manage-affection-excercice.component';

describe('ManageAffectionExcerciceComponent', () => {
  let component: ManageAffectionExcerciceComponent;
  let fixture: ComponentFixture<ManageAffectionExcerciceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAffectionExcerciceComponent]
    });
    fixture = TestBed.createComponent(ManageAffectionExcerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
