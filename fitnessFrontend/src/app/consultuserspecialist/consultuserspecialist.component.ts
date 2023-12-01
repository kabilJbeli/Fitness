import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { Component, Inject, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ApplicationService } from '../application.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-consultuserspecialist',
  templateUrl: './consultuserspecialist.component.html',
  styleUrls: ['./consultuserspecialist.component.scss']
})
export class ConsultuserspecialistComponent {
  public spinner:boolean = false;
  public currentuser: any;
  public listpics: any;
  public _albums: any = [];
  public display:boolean=false;
  constructor(
    private _lightbox: Lightbox,
    private service: ApplicationService,
    public keycloakService: KeycloakService,
    public dialogRef: MatDialogRef<ActionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {
    this.spinner = true;    
    this.service.getUser(data).subscribe((result: any) => {
      
      this.currentuser = result;
      if ((this.currentuser.role =='Coach' || this.currentuser.role =='Nutritionist') &&  this.currentuser.coachpicout != null){
        this.display=true;
        this.listpics = 'data:image/jpg;base64,'+ this.currentuser.coachpicout;
        const album = {
          src: this.listpics,
       };
       this.spinner=false;
       this._albums.push(album);
      }
      else if (this.currentuser.role =='Client' && this.currentuser.pictures != null &&  this.currentuser.pictures.length>0){
        this.display=true;
        for (let i = 0; i<this.currentuser.pictures.length; i++){
          this.listpics = 'data:image/jpg;base64,'+ this.currentuser.pictures[i].image;
          const album = {
            src: this.listpics,
         };
         this.spinner=false;
         this._albums.push(album);
        }

      }
      this.spinner=false;
    });
    //dialogRef.disableClose = true;
  }
  ngOnInit(): void {
  }
  getboolean(valeur: boolean): String{
    return valeur? "Oui": "Non";
  }
  getworjout(valeur: boolean): String{
    return valeur ? "La maison" : "Salle sport";
  }
  getGender(valeur: boolean): String{
    return valeur ? "Female" : "Male";

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}