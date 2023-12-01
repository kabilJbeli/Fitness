import {Component, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Router, ActivatedRoute} from '@angular/router';
import {Mode} from 'src/app/Enums/Mode';
import {ActionModalComponent} from 'src/app/action-modal/action-modal.component';
import {IngredientService} from 'src/app/services/ingredient/ingredient.service';
import {RepasService} from 'src/app/services/repas/repas.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss']
})
export class RepasComponent {
  rows = [{noQuestion: 0}];
  public listingredient: any = []
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  idRepas: any;
  repas: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: RepasService,
    private serviceing: IngredientService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      idRepas: [null],
      libelle: [null, Validators.required],
      repasIngredients: this.formBuilder.array([]),
    });


  }


  get repasIngredients(): FormArray {
    return this.formGroup.get("repasIngredients") as FormArray
  }

  ngOnInit(): void {
    this.initMode();
  }

  get f() {
    return this.formGroup.controls;
  }

  initMode() {

    this.mode = this.actifRoute.snapshot.data['mode'];
    if (this.mode && this.mode == Mode.CREATE) {
      this.repasIngredients.push(this.newIngredient())
    }

    this.serviceing.getIngredients().subscribe((result: any[]) => {
      this.spinner = false;
      const filteredResults: any[] = [];
      result.forEach(ingredient => {
        filteredResults.push({
          idIngredient: ingredient.idIngredient,
          libelle: ingredient.libelle,
          unitepoids: ingredient.unitepoids
        })
      })
      this.listingredient = filteredResults;
    });

    if (this.mode && this.mode == Mode.UPDATE || this.mode == Mode.READ) {

      this.idRepas = this.actifRoute.snapshot.params['id'];
      if (this.idRepas) {
        this.formGroup.patchValue({idRepas: this.idRepas});
        this.getRepasById(this.idRepas);
      }
    }

  }

  addNewRow() {
    this.repasIngredients.push(this.newIngredient());
  }

  newIngredient(): FormGroup {
    return this.formBuilder.group({
      idRepasIngredient: this.formBuilder.group({ingredient: []}),
      poids: [],
    })
  }

  removeIngredient(i: number) {
    this.repasIngredients.removeAt(i);
  }

  onSubmit() {
    this.spinner = true;
    if (this.mode == Mode.CREATE) {
      this.service.createRepas(this.formGroup.value).subscribe(
        (res) => {
          this.route.navigate(['/liste-repas']);
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
            message = "Impossible d'affecter le même ingredient plusieur fois";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: {name: message, action: 'erreur'},
          });
        }
      );

    } else if (this.mode == Mode.UPDATE) {
      this.service.updateRepas(this.formGroup.value).subscribe(
        (res) => {
          this.route.navigate(['/liste-repas']);
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

  }

  getRepasById(idRepas: number): void {
    this.spinner = true;
    this.service.getRepas(idRepas).subscribe((result: any) => {
      this.spinner = false;
      this.repas = result;
      this.formGroup.patchValue({libelle: result.libelle});
      const ingredients: any[] = result.repasIngredients || [];
      ingredients.forEach(item => {
        this.repasIngredients.push(this.formBuilder.group({
          idRepasIngredient: this.formBuilder.group({ingredient: [item.idRepasIngredient.ingredient,[]]}),
          poids: [item.poids, []],
        }))
      })
    });
  }
}
