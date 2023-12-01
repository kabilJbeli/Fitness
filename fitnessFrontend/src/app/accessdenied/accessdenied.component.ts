import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-accessdenied',
  templateUrl: './accessdenied.component.html',
  styleUrls: ['./accessdenied.component.scss']
})
export class AccessdeniedComponent implements OnInit {
  constructor(private keycloak:KeycloakService){}
  ngOnInit(): void {
    setTimeout(() => {
      this.keycloak.logout();
    
    }, 2000);  }

}
