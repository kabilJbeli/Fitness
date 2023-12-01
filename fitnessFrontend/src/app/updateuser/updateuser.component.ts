import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import {KeycloakService} from "keycloak-angular";
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  public formGroup: FormGroup;
  public currentuser: any;
  public spinner: boolean = false;
  public roles: String[] = ['Admin', 'Coach', 'Nutritionist'];
  public keyclockkeycurrent:String;

  updateDate(date: Date){
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
  }

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    public keycloakService: KeycloakService,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    let MOBILE_PATTERN = "^[0-9]{8}";
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, [Validators.required]],
      email: [null, [ Validators.email ]],
      role: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(MOBILE_PATTERN)]],
      birthdate: [null, [Validators.required]],
      keycloakkey: [null, []],
    });
    
    this.keyclockkeycurrent = this.keycloakService.getKeycloakInstance().profile?.id || '0';
    console.log(this.keyclockkeycurrent)
    const id: string = this._Activatedroute.snapshot.paramMap.get('id') || '0';
    
    this.service.getUser(id).subscribe((result: any) => {
      this.currentuser = result;
      this.formGroup.patchValue({
        name: result.name,
        surname: result.surname,
        email: result.email,
        role: result.role,
        phone: result.phone,
        birthdate: result.birthdate,
        keycloakkey: result.keycloakkey,
      });
    });
  }

  ngOnInit(): void {}

  redictUpdatepassword(key: String){
    this.route.navigate([`/update-password/${key}`]);

  }

  get f() {
    return this.formGroup.controls;
  }

  onSubmit(user: any) {
    console.log(user);
    user.birthdate = this.updateDate(user.birthdate);
    this.spinner = true;
    this.service.updateUser(user).subscribe(
      (res) => {
        this.spinner = false;
        this.route.navigate(['/Manage-user']);
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { action: 'confirm' },
        });

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

