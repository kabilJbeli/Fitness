import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
 public display:any=false;
  public items: MenuItem[];
  public menuBarItems: MenuItem[]=[];
  public useritems=       {
    label: 'Administration',
    items: [
      {
        label: 'Comptabilité',
        command: (event: any) => {
          this.route.navigate(['/']);
        },
      },
      {
        label: 'Gestion utilisateur',
        command: (event: any) => {
          this.route.navigate(['/Manage-user']);
        },
      }

    ]
  }

  public regimemenu = {
    label: 'Régime alimentaire',
    items: [
      {
        label: 'Gestion ingrédient',
        command: (event: any) => {
          this.route.navigate(['/liste-ingredient']);
        },
      },
      {
        label: 'Gestion repas',
        command: (event: any) => {
          this.route.navigate(['/liste-repas']);
        },
      },
      {
        label: 'Affectation menu',
        command: (event: any) => {
          this.route.navigate(['/list-menu']);
        },
      },


    ],
  }

  public packaging = {
    label: 'Packaging',
    items: [ {
      label: 'Gestion package item',
      command: (event: any) => {
        this.route.navigate(['/liste-package-item']);
      },
      },
      {
        label: 'Gestion packages',
        command: (event: any) => {
          this.route.navigate(['/liste-package']);
        },
      },

    ],
  } 
  public exercice = {
      label: 'Exercice Sportif',
      items: [{
        label: 'Gestion Exercice Sportif',
        command: (event: any) => {
          this.route.navigate(['/list-exercice-sportif']);
        },
      }, 
      {
        label: 'Affectation des exercices sportifs',
        command: (event: any) => {
          this.route.navigate(['/affect-exercice-sportif']);
        },
      },
    ],
  }


  constructor(private route: Router,private keycloakService: KeycloakService) {
    if(this.keycloakService.isUserInRole("Client")){
      this.route.navigate(['/access-denied']);

    }

    this.items = [];
    if (this.keycloakService.isUserInRole("Admin")){
      this.items.push(this.useritems);
      this.items.push(this.packaging);
      this.items.push(this.exercice);

    }

    if (this.keycloakService.isUserInRole("Admin") || this.keycloakService.isUserInRole("Nutritionist")){
      this.items.push(this.regimemenu);
    }

    const userInfo:any=this.keycloakService.getKeycloakInstance().profile;

    this.menuBarItems.push(
      {
        label: userInfo.firstName+' '+userInfo.lastName,
        icon: 'pi pi-fw pi-user',
        styleClass:'pull-right d-right active',
        items: [
          {
            label: 'Modifier mon profile',
            command: (event: any) => {
              this.route.navigate([`/update-profile-information/${userInfo.id}`]);
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            command: (event: any) => {
              this.keycloakService.logout("");
            },
          }

        ]
      }
    );
  }

  activeMenu(event:any) {

    let node;
    if (event.target.tagName === "A") {
      node = event.target;
    } else {
      node = event.target.parentNode;
    }
    let menuitem:any = document.getElementsByClassName("p-menuitem-link");
    for (let item of menuitem) {
      item.classList.remove("active");
    }
    node.classList.add("active")
  }
  ngOnInit(): void {
  }
}
