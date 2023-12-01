import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { LazyLoadEvent } from 'primeng/api';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { ApplicationService } from 'src/app/application.service';
import { ConsultuserspecialistComponent } from 'src/app/consultuserspecialist/consultuserspecialist.component';
import { ExerciceSportifService } from 'src/app/services/exercice-sportif/exercice-sportif.service';

@Component({
  selector: 'app-list-affection-excercice',
  templateUrl: './list-affection-excercice.component.html',
  styleUrls: ['./list-affection-excercice.component.scss']
})
export class ListAffectionExcerciceComponent {

  public clients: any[] = [];
  public spinner: boolean = false;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private clientService: ApplicationService,
     public keycloakService: KeycloakService,
      public route: Router,
      public dialog: MatDialog,
      public serviceAffect: ExerciceSportifService,
      ) 
  {
    this.spinner=true;
}

  ngOnInit(): void {
    this.getAll();
  }
  
  loadData(event: LazyLoadEvent): void {
    this.lazyLoadEvent = event;
}
  
  addNew(){
    this.route.navigate(['/create-affect-exercice-sportif']);
  }
  
  getAll(): void {
    this.spinner = true;
    if (this.keycloakService.isUserInRole("Admin")){
      this.clientService.getclientadmin().subscribe(result => {
        result.forEach((item) =>{
          this.clients.push(item.iduserpackage.clientpackage)
        });
        this.spinner = false;
      })
  }
  else{
    const userInfo:any=this.keycloakService.getKeycloakInstance().profile;
    this.clientService.getclientnutro(userInfo.id).subscribe(result => {
      result.forEach((item) =>{
        this.clients.push(item.clientpackage)
      });
      this.spinner = false;
  })
  }
  }

  updateAffect(clientid: any){
    this.route.navigate([`/update-affect-exercice-sportif/${clientid}`]);
  }

  createAffect(clientid: any){
    this.route.navigate([`/create-affect-exercice-sportif/${clientid}`]);
  }

  ConsulterDossierMed(keycloackuid :string){
    this.dialog.open(ConsultuserspecialistComponent, {
      width: '500px',
      data: keycloackuid,
    });
    
  }

  deleteAffect(clientid: string){
    this.spinner = true;
    this.serviceAffect.deleteAffectExerciceSportif(clientid).subscribe(
      (result) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { action: 'confirm' },
        });
        this.loadData(this.lazyLoadEvent);
        this.getAll();
      },
      (error) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { name: "Impossible d'effectuer cette opération", action: 'erreur' },
        });
      }
    );
  }

}

