import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteruserComponent } from './consulteruser.component';

describe('ConsulteruserComponent', () => {
  let component: ConsulteruserComponent;
  let fixture: ComponentFixture<ConsulteruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulteruserComponent]
    });
    fixture = TestBed.createComponent(ConsulteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
