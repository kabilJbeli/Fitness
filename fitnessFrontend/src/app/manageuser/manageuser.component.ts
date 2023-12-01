import { Component, OnInit } from '@angular/core';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { ApplicationService } from '../application.service';
import { MatDialog } from '@angular/material/dialog';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {

  public Users: any[] = [];
  public spinner: boolean = false;
  public userInfo: any;
  constructor(
    private service: ApplicationService,
    private route: Router,
    public dialog: MatDialog,
    private keycloakService:KeycloakService
  ) {
    this.spinner=true;
    this.userInfo=this.keycloakService.getKeycloakInstance().profile;
  }

  ngOnInit(): void {
    this.getAll();
  }
  addNew(){
    this.route.navigate(['/Create-user']);
  }
  getAll(): void {
    this.spinner = true;
    this.service.getUsers().subscribe((result: any[]) => {
      this.spinner = false;
      this.Users = result;
    });
  }
  consultpackage(user: any){
    this.route.navigate([`/liste-packageclient/${user}`]);
  }

  updateUser(user: any){
    this.route.navigate([`/Update-user/${user}`]);
  }

  consulterUser(user: any){
    this.route.navigate([`/consulter-user/${user}`]);
  }

  deleteUser(user: any){
    this.spinner = true;
    this.service.deleteUser(user).subscribe(
      (result) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { action: 'confirm' },
        });
        this.getAll();
      },
      (error) => {
        this.spinner = false;
        let message = '';
        if (error.error =='4')
         message= "Le client a un package en cours";
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { name: message, action: 'erreur' },
        });
      }
    );
  }

  enabledisable(user: any) {
    this.spinner = true;
        this.service.enableDisable(user).subscribe(
          (result) => {
            this.spinner = false;
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { action: 'confirm' },
            });
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
