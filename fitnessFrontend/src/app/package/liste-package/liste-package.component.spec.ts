import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePackageComponent } from './liste-package.component';

describe('ListePackageComponent', () => {
  let component: ListePackageComponent;
  let fixture: ComponentFixture<ListePackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePackageComponent]
    });
    fixture = TestBed.createComponent(ListePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
