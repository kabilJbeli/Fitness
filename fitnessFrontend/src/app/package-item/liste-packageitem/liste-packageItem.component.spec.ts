import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePackageItemComponent } from './liste-packageItem.component';

describe('ListePackageitemComponent', () => {
  let component: ListePackageItemComponent;
  let fixture: ComponentFixture<ListePackageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePackageItemComponent]
    });
    fixture = TestBed.createComponent(ListePackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
