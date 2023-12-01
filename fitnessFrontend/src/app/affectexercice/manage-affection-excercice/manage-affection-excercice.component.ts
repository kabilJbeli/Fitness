import {Component} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {Mode} from 'src/app/Enums/Mode';
import {ActionModalComponent} from 'src/app/action-modal/action-modal.component';
import {ApplicationService} from 'src/app/application.service';
import {ExerciceSportifService} from 'src/app/services/exercice-sportif/exercice-sportif.service';

@Component({
  selector: 'app-manage-affection-excercice',
  templateUrl: './manage-affection-excercice.component.html',
  styleUrls: ['./manage-affection-excercice.component.scss']
})
export class ManageAffectionExcerciceComponent {

  public spinner: boolean = false;
  public formGroup: FormGroup;
  mode!: string;
  public clients: any[] = [];
  public selectedclient: any;
  public exercices: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    public dialog: MatDialog,
    private service: ExerciceSportifService,
    private clientService: ApplicationService,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      affectationrequests: this.formBuilder.array([]),
    });
  }

  get affectationrequests(): FormArray {
    return this.formGroup.get("affectationrequests") as FormArray
  }

  addNewRow() {
    this.affectationrequests.push(this.newaffectationrequest());
  }

  addNewRowexer(i: any) {
    this.affectationrequests.getRawValue()[i].exerciceSportifs.push(this.newaffectationExrequest());
  }

  newaffectationExrequest(): FormGroup {
    return this.formBuilder.group({
      exerciceSportif: [null, []],
      numberactperserie: [null, []],
      numberserie: [null, []],
      idclientMenu: [null, []],
    });
  }


  newaffectationrequest(): FormGroup {
    return this.formBuilder.group({
      exerciceSportifs: this.formBuilder.array([this.formBuilder.group({
        exerciceSportif: [null, []],
        numberactperserie: [null, []],
        numberserie: [null, []],
        idclientMenu: [null, []],
      })
      ]),
      startdate: [null, [Validators.required]],
      enddate: [null, [Validators.required]],
      keycloakclient: [null, []],
      affectdescription: [null, [Validators.required]],
    });
  }

  removeAffectation(i: number) {
    this.affectationrequests.removeAt(i);
  }

  ngOnInit(): void {
    this.initMode();
  }


  get f() {
    return this.formGroup.controls;
  }

  initMode() {
    this.spinner = true;
    this.selectedclient = this.actifRoute.snapshot.params['id'];
    this.mode = this.actifRoute.snapshot.data['mode'];
    this.service.getExerciceSportifs().subscribe((result: any[]) => {
      this.exercices = result;
      console.log(this.exercices)
      this.spinner = false;
    });

    if (this.mode && this.mode == Mode.UPDATE || this.mode == Mode.READ) {

      this.formGroup.patchValue({
        keycloakclient: this.selectedclient
      });
      if (this.selectedclient) {
        this.getExerciceSportifbycllient(this.selectedclient);
      }
    }
  }


  onSubmit(exerciceSportif: any) {
    this.spinner = true;
    const affectationrequests: any[] = this.formGroup.value.affectationrequests;
    //clientmenu.forEach(item => {
    //item.idclientMenu.datemenu= this.updateDate(item.idclientMenu.datemenu);
    //});
    affectationrequests.forEach(item => {
      item.keycloakclient = this.selectedclient;
    });
    this.service.updateAffectExerciceSportif(affectationrequests).subscribe(
      (res) => {
        this.spinner = false;
        this.route.navigate(['/list-exercice-sportif']);
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {action: 'confirm'},
        });

      },
      (error) => {
        console.log(error);
        this.spinner = false;
        let message = '';
        if (error.error == '2')
          message = "Erreur !";
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {name: message, action: 'erreur'},
        });
      }
    );

  }

  getExerciceSportifbycllient(clientkey: string): void {
    this.service.getAffectExerciceSportif(clientkey).subscribe((result: any) => {
      this.spinner = false;
      this.formGroup.patchValue({affectdescription: result.affectdescription});
    });
  }
}
