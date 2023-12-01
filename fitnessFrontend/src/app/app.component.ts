import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AuthGuard } from './auth-guard';
import { auto } from '@popperjs/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "Fi'You";
  public denied: boolean=false;
  constructor(
    private primengConfig: PrimeNGConfig,
    public route: Router,
    public authGuard: AuthGuard,
  ) {
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    if (!localStorage.getItem('signedIn')) {
      localStorage.setItem('signedIn', 'false');
    }
    if(!this.authGuard.isAccessAllowed){
      this.denied= true;
    }

  }
}
