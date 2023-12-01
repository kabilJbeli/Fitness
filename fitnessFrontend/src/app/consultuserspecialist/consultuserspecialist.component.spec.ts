import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultuserspecialistComponent } from './consultuserspecialist.component';

describe('ConsultuserspecialistComponent', () => {
  let component: ConsultuserspecialistComponent;
  let fixture: ComponentFixture<ConsultuserspecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultuserspecialistComponent]
    });
    fixture = TestBed.createComponent(ConsultuserspecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
