import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { KeycloakAngularModule, KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { initializer } from './app-init';
import { SharedModule } from 'primeng/api';
import { MaterialModule } from './shared-module/material.module';
import { MenubarModule } from 'primeng/menubar';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { TableModule } from 'primeng/table';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { IngredientComponent } from './ingredient/manage-ingredient/ingredient.component';
import { ListeIngredentComponent } from './ingredient/liste-ingredent/liste-ingredent.component';
import { CreateUserComponent } from './createuser/createuser.component';
import { ConsulteruserComponent } from './consulteruser/consulteruser.component';
import { LightboxModule } from 'ngx-lightbox';
import { PackageComponent } from './package/manage-package/package.component';
import { ListePackageComponent } from './package/liste-package/liste-package.component';
import { PackageItemComponent,  } from './package-item/manage-packageitem/packageitem.component';
import { ListePackageItemComponent } from './package-item/liste-packageitem/liste-packageItem.component';
import { RepasComponent } from './repas/manage-repas/repas.component';
import { ListeRepasComponent } from './repas/liste-repas/liste-repas.component';
import { MultiSelectModule } from 'primeng/multiselect';
import {NgxImageCompressService} from 'ngx-image-compress';
import { ManageMenuComponent } from './menus/manage-menu/manage-menu.component';
import { ListMenuComponent } from './menus/list-menu/list-menu.component';
import { ClientspackagesComponent } from './clientspackages/clientspackages.component';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {PanelMenuModule} from "primeng/panelmenu";
import {DropdownModule} from "primeng/dropdown";
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ConsultuserspecialistComponent } from './consultuserspecialist/consultuserspecialist.component';
import { ManageExerciceSportifComponent } from './exercice-sportif/manage-exercice-sportif/manage-exercice-sportif.component';
import { ListeExerciceSportifComponent } from './exercice-sportif/liste-exercice-sportif/liste-exercice-sportif.component';
import { ListAffectionExcerciceComponent } from './affectexercice/list-affection-excercice/list-affection-excercice.component';
import { ManageAffectionExcerciceComponent } from './affectexercice/manage-affection-excercice/manage-affection-excercice.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CreateUserComponent,
    ManageuserComponent,
    UpdateuserComponent,
    ActionModalComponent,
    ActionModalComponent,
    UpdatePasswordComponent,
    AccessdeniedComponent,
    ConsulteruserComponent,
    IngredientComponent,
    ListeIngredentComponent,
    PackageComponent,
    ListePackageComponent,
    PackageItemComponent,
    ListePackageItemComponent,
    RepasComponent,
    ListeRepasComponent,
    ManageMenuComponent,
    ListMenuComponent,
    ListeRepasComponent,
    ClientspackagesComponent,
    ConsultuserspecialistComponent,
    ManageExerciceSportifComponent,
    ListeExerciceSportifComponent,
    ListAffectionExcerciceComponent,
    ManageAffectionExcerciceComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    KeycloakAngularModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MenubarModule,
    TableModule,
    DividerModule,
    PasswordModule,
    LightboxModule,
    MultiSelectModule,
    SidebarModule,
    SharedModule,
    ButtonModule,
    PanelMenuModule,
    DropdownModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
    JwtHelperService,
    NgxImageCompressService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
