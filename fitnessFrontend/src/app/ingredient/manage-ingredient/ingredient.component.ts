import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from 'src/app/Enums/Mode';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { IngredientService } from 'src/app/services/ingredient/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  Unites:any[]= ["KG","LITRE", "GRAMME","CENTILITRE","MILLILITRE","PIECE" ,"PORTION"];
  selectedUnit: any;
  idIngredient: any;
  ingredient: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: IngredientService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      idIngredient: [null],
      libelle: [null, Validators.required],
      unitepoids: [null, [Validators.required]],
    });
    
  }

  ngOnInit(): void {
    this.initMode();
  }

  get f() {
    return this.formGroup.controls;
  }

  initMode(){
    this.mode = this.actifRoute.snapshot.data['mode'];

    if(this.mode && this.mode == Mode.UPDATE || this.mode == Mode.READ){
      this.idIngredient = this.actifRoute.snapshot.params['id'];
      this.formGroup.controls['idIngredient'].setValue(this.idIngredient);
      if(this.idIngredient){
        this.getIngredientById(this.idIngredient);

      }
    }
  }
  
  onChangeUnite(){
      this.selectedUnit = this.formGroup.get('unite')?.value;
  }
 
  onSubmit(ingredient: any) {
    this.spinner = true;
    if (this.mode == Mode.CREATE){
      this.service.createIngredient(ingredient).subscribe(
        (res) => {
          this.route.navigate(['/liste-ingredient']);
          this.spinner = false;
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: {  action: 'confirm' },
          });
  
        },
        (error) => {
          console.log(error);
          this.spinner = false;
          let message = '';
          if (error.error =='2')
           message= "Ingrédient existe déjà";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: { name: message, action: 'erreur' },
          });
        }
      );
    } else if (this.mode == Mode.UPDATE){
      this.service.updateIngredient(ingredient).subscribe(
        (res) => {
          this.route.navigate(['/liste-ingredient']);
          this.spinner = false;
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: {  action: 'confirm' },
          });
  
        },
        (error) => {
          console.log(error);
          this.spinner = false;
          let message = '';
          if (error.error =='2')
           message= "Erreur !";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: { name: message, action: 'erreur' },
          });
        }
      );
    }
  }

  getIngredientById(idIngredient:number): void {
    this.spinner = true;
    this.service.getIngredient(idIngredient).subscribe((result: any) => {
      this.spinner = false;
      this.ingredient = result;
      this.formGroup.controls['libelle'].setValue(result.libelle);
      this.formGroup.controls['unitepoids'].setValue(result.unitepoids);
      this.formGroup.controls['idIngredient'].setValue(result.idIngredient);
      this.selectedUnit = result;
      
    });
  }
}
