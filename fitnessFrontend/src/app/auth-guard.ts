import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    // Get the roles required from the route.
    const requiredRoles = ["Admin", "Coach", "Nutritionist"];
    let isRoleAllowed:boolean=false;
    this.keycloak.getUserRoles().map(role=>{
    if(requiredRoles.includes(role)){
      isRoleAllowed =true;    
    }})
    // Allow the user to proceed if all the required roles are present.
    if (isRoleAllowed) {
      return true;
    } else {
      return false;
    }
  }
}
