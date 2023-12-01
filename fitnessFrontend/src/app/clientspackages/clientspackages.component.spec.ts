import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientspackagesComponent } from './clientspackages.component';

describe('ClientspackagesComponent', () => {
  let component: ClientspackagesComponent;
  let fixture: ComponentFixture<ClientspackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientspackagesComponent]
    });
    fixture = TestBed.createComponent(ClientspackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
