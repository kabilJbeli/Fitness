import { Component } from '@angular/core';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationService } from '../application.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  public formGroup: FormGroup;
  public currentuser: any;
  public spinner: boolean = false;
  public showPassword = false;
  public keyclockkeycurrent: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    public keycloakService: KeycloakService,
    private _Activatedroute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.formGroup = this.formBuilder.group({
      password: [null, Validators.required],
      newpassword: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8}$')]],
      email: [null, []],
    });
    
    const id: string = this._Activatedroute.snapshot.paramMap.get('id') || '0';
    
    this.service.getUser(id).subscribe((result: any) => {
      this.currentuser = result;
      this.formGroup.patchValue({
        email: result.email,
      });
    });
  }

  ngOnInit(): void {}

  onSubmit(user: any) {
    this.spinner = true;
    this.service.updatepassword(user).subscribe(
      (res) => {
        this.keyclockkeycurrent = this.keycloakService.getKeycloakInstance().profile?.id || '0';
        this.route.navigate([`/update-profile-information/${this.keyclockkeycurrent}`]);
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { action: 'confirm' },
        });

      },
      (error) => {
        this.spinner = false;
            this.dialog.open(ActionModalComponent, {
              width: '500px',
              data: { name: "l'ancient mot de passe est incorrect", action: 'erreur' },
            });
      }
    );
  }
}

