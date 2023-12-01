import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RepasService } from "../../services/repas/repas.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { Mode } from "../../Enums/Mode";
import { ActionModalComponent } from "../../action-modal/action-modal.component";
import { MenuService } from "../../services/menu/menu.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ApplicationService } from "../../application.service";
import { KeycloakService } from 'keycloak-angular';
import { ConsultuserspecialistComponent } from 'src/app/consultuserspecialist/consultuserspecialist.component';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss']
})
export class ManageMenuComponent {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  idMenu: any;
  repasList: any[] = [];
  repasListfinal: any[] = [];
  clients: any[] = [];
  selectedRepas: any[] = [];
  consultclient: any;


  constructor(
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService,
    private service: RepasService,
    private menuService: MenuService,
    private clientService: ApplicationService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      idMenu: [null],
      libelle: [null, Validators.required],
      clientmenu: this.formBuilder.array([]),
    });

  }
  get clientmenu(): FormArray {
    return this.formGroup.get("clientmenu") as FormArray
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  removeclient(i: number) {
    this.clientmenu.removeAt(i);
  }
  
  consulterclient(i :any){
    this.consultclient = this.clientmenu.at(i);
    this.dialog.open(ConsultuserspecialistComponent, {
      width: '500px',
      data: this.consultclient.controls.idclientMenu.controls.client.value.keycloackuid,
    });
    
  }

  newClient(): FormGroup {
    return this.formBuilder.group({
      idclientMenu: this.formBuilder.group(
        {
          client: [],
          datemenu: [],
        }
      ), affectdate:[],
    })
  }


  addNewRow() {
    this.clientmenu.push(this.newClient());
  }

  ngOnInit(): void {
    this.initMode();
  }

  get f() {
    return this.formGroup.controls;
  }

  initMode() {
    this.mode = this.actifRoute.snapshot.data['mode'];

    this.service.getRepasList().subscribe(result => {
      this.repasList = result;

      if (this.mode && this.mode == Mode.UPDATE) {
        this.idMenu = this.actifRoute.snapshot.params['id'];
        if (this.idMenu) {
          this.menuService.getMenu(this.idMenu).subscribe((result: any) => {
            this.formGroup.patchValue({
              idmenus: result.idmenus,
              libelle: result.libelle,
            });
            const clients: any[] = result.clientmenu || [];
            clients.forEach(item => {
              this.clientmenu.push(this.formBuilder.group({
                idclientMenu: this.formBuilder.group({
                  client: [item.idclientMenu.client, []],
                  datemenu: [item.idclientMenu.datemenu, []]
                }), affectdate: [item.affectdate, []]
              }))
            });
            const repas: any[] = result.menurepas || [];
            repas.forEach(item => {
              this.selectedRepas.push(item.idMenuRepas.repas);
            });
            this.repasList = this.repasList.filter(repas => this.selectedRepas.filter(rep => rep.idRepas == repas.idRepas).length==0);
          });
        }
      }

    })

    if (this.keycloakService.isUserInRole("Admin")){
      this.clientService.getclientadmin().subscribe(result => {
        result.forEach((item) =>{
          this.clients.push(item.iduserpackage.clientpackage)
        });
      })
  }
  else{
    const userInfo:any=this.keycloakService.getKeycloakInstance().profile;
    this.clientService.getclientnutro(userInfo.id).subscribe(result => {
      result.forEach((item) =>{
        this.clients.push(item.clientpackage)
      });
  })
  }

  }
  
  updateDate(date: Date) {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
  }
  onSubmit() {
    this.spinner = true;
    const menurepasList: any[] = [];
    this.selectedRepas.forEach((repas, index) => {
      menurepasList.push(
        {
          idMenuRepas: { repas: repas },
          orders: index + 1
        }
      )
    })
    if (this.selectedRepas.length > 0) {
      const clientmenu : any[] = this.formGroup.value.clientmenu;
      clientmenu.forEach(item => {
        item.idclientMenu.datemenu= this.updateDate(item.idclientMenu.datemenu);
      });
      const payload: any = {
        libelle: this.formGroup.value.libelle,
        menurepas: menurepasList,
        clientmenu: clientmenu,
      }
      if (this.mode && this.mode == Mode.CREATE) {
        this.menuService.createMenu(payload).subscribe(
          (res) => {
            this.route.navigate(['/list-menu']);
            this.spinner = false;
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { action: 'confirm' },
            });

          },
          (error) => {
            console.log(error);
            this.spinner = false;
            let message = '';
            if (error.error == '3')
              message = "Une erreur s'est produite";
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { name: message, action: 'erreur' },
            });
          }
        );
      }
      else if (this.mode && this.mode == Mode.UPDATE) {
        payload.idmenus = this.idMenu;
        this.menuService.updateMenu(payload).subscribe(
          (res) => {
            this.route.navigate(['/list-menu']);
            this.spinner = false;
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { action: 'confirm' },
            });

          },
          (error) => {
            console.log(error);
            this.spinner = false;
            let message = '';
            if (error.error == '3')
              message = "Une erreur s'est produite";
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { name: message, action: 'erreur' },
            });
          }
        );
      }
    }
    else {
      this.spinner = false;
      this.dialog.open(ActionModalComponent, {
        width: '500px',
        data: { name: "Impossible de créer un menu sans repas", action: 'erreur' },
      });
    }

  }

}
