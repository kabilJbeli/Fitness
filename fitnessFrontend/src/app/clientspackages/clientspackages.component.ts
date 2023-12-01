import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { ApplicationService } from '../application.service';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clientspackages',
  templateUrl: './clientspackages.component.html',
  styleUrls: ['./clientspackages.component.scss']
})
export class ClientspackagesComponent {
  public spinner: boolean = false;
  public listpackage:any[]=[];
  constructor(
    private service: ApplicationService,
    public keycloakService: KeycloakService,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog,
    private route: Router,
  ) {
    this.spinner = true;
    const id: string = this._Activatedroute.snapshot.paramMap.get('id') || '0';
    
    this.service.getUserpackage(id).subscribe((result: any) => {
      
      this.listpackage = result;
      if (this.listpackage.length  == 0){
        this.route.navigate(['/Manage-user']);
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {name: "L'utilisateur selectionné n'a pas de package courant", action: 'erreur'},
        });
      }

    });
  }
  ngOnInit(): void {
  }
  getfrequency(valeur: String): String{
    if (valeur == 'Temporaire')
    return "Jours"
    else if (valeur == "Mensuel")
    return "Mois"
    else
    return "Année(s)"
  }
  
}