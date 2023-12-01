import {Routes, CanActivate} from '@angular/router';

import {AuthGuard} from "./auth-guard";
import {ManageuserComponent} from './manageuser/manageuser.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {AccessdeniedComponent} from './accessdenied/accessdenied.component';
import {UpdatePasswordComponent} from './update-password/update-password.component';
import {CreateUserComponent} from './createuser/createuser.component';
import {IngredientComponent} from './ingredient/manage-ingredient/ingredient.component';
import {ConsulteruserComponent} from './consulteruser/consulteruser.component';
import {ListeIngredentComponent} from './ingredient/liste-ingredent/liste-ingredent.component';
import {ListePackageComponent} from './package/liste-package/liste-package.component';
import {PackageComponent} from './package/manage-package/package.component';
import {ListePackageItemComponent} from './package-item/liste-packageitem/liste-packageItem.component';
import {PackageItemComponent} from './package-item/manage-packageitem/packageitem.component';
import {ListeRepasComponent} from './repas/liste-repas/liste-repas.component';
import {RepasComponent} from './repas/manage-repas/repas.component';
import {ListMenuComponent} from "./menus/list-menu/list-menu.component";
import {ManageMenuComponent} from "./menus/manage-menu/manage-menu.component";
import { ClientspackagesComponent } from './clientspackages/clientspackages.component';
import { ListeExerciceSportifComponent } from './exercice-sportif/liste-exercice-sportif/liste-exercice-sportif.component';
import { ManageExerciceSportifComponent } from './exercice-sportif/manage-exercice-sportif/manage-exercice-sportif.component';
import { ListAffectionExcerciceComponent } from './affectexercice/list-affection-excercice/list-affection-excercice.component';
import { ManageAffectionExcerciceComponent } from './affectexercice/manage-affection-excercice/manage-affection-excercice.component';

export const ROUTES: Routes = [
  {
    path: 'Create-user',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'Manage-user',
    component: ManageuserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Update-user/:id',
    component: UpdateuserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'update-profile-information/:id',
    component: UpdateuserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'update-password/:id',
    component: UpdatePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'consulter-user/:id',
    component: ConsulteruserComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'access-denied',
    component: AccessdeniedComponent,
  },
  {
    path: 'create-ingredient',
    component: IngredientComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'liste-ingredient',
    component: ListeIngredentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-ingredient/:id',
    component: IngredientComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'ingredient/:id',
    component: IngredientComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  },
  {
    path: 'liste-package',
    component: ListePackageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-package',
    component: PackageComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-package/:id',
    component: PackageComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'package/:id',
    component: PackageComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  },
  {
    path: 'liste-package-item',
    component: ListePackageItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'liste-packageclient/:id',
    component: ClientspackagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-package-item',
    component: PackageItemComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-package-item/:id',
    component: PackageItemComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'package-item/:id',
    component: PackageItemComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  },
  {
    path: 'liste-repas',
    component: ListeRepasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-repas',
    component: RepasComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-repas/:id',
    component: RepasComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'repas/:id',
    component: RepasComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  },
  {
    path: 'list-menu',
    component: ListMenuComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'create-menu',
    component: ManageMenuComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-menu/:id',
    component: ManageMenuComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'menu/:id',
    component: ManageMenuComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  },
  {
    path: 'list-exercice-sportif',
    component: ListeExerciceSportifComponent,
    canActivate: [AuthGuard]
  },
   {
    path: 'create-exercice-sportif',
    component: ManageExerciceSportifComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-exercice-sportif/:id',
    component: ManageExerciceSportifComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },
  {
    path: 'exercice-sportif/:id',
    component: ManageExerciceSportifComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'READ',
    },
  }, 
  {
    path: 'affect-exercice-sportif',
    component: ListAffectionExcerciceComponent,
    canActivate: [AuthGuard]
  },   {
    path: 'create-affect-exercice-sportif/:id',
    component: ManageAffectionExcerciceComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'CREATE',
    },
  },
  {
    path: 'update-affect-exercice-sportif/:id',
    component: ManageAffectionExcerciceComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'UPDATE',
    },
  },


];
