import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdeniedComponent } from './accessdenied.component';

describe('AccessdeniedComponent', () => {
  let component: AccessdeniedComponent;
  let fixture: ComponentFixture<AccessdeniedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessdeniedComponent]
    });
    fixture = TestBed.createComponent(AccessdeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
