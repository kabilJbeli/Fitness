import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Lightbox } from 'ngx-lightbox';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-consulteruser',
  templateUrl: './consulteruser.component.html',
  styleUrls: ['./consulteruser.component.scss']
})
export class ConsulteruserComponent implements OnInit {
  public currentuser: any;
  public spinner: boolean = false;
  public listpics: any;
  public _albums: any = [];
  public display:boolean=false;

  constructor(
    private _lightbox: Lightbox,
    private service: ApplicationService,
    private route: Router,
    public keycloakService: KeycloakService,
    private _Activatedroute: ActivatedRoute,
  ) {
    this.spinner = true;
    const id: string = this._Activatedroute.snapshot.paramMap.get('id') || '0';
    
    this.service.getUser(id).subscribe((result: any) => {
      
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
  ngOnInit(): void {
  }

  
}