import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from 'src/app/Enums/Mode';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { PackageItemService } from 'src/app/services/package-item/package-item.service';
import { PackageService } from 'src/app/services/package/package.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  idpackage: any;
  pack: any;
  packageItemsList!: any[];
  public unites: String[] = ['Temporaire', 'Mensuel', 'Annuel'];

  constructor(
    private formBuilder: FormBuilder,
    private service: PackageService,
    private packageItemservice: PackageItemService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      idPackage: [null],
      libelle: [null, Validators.required],
      description: [null, [Validators.required]],
      validity: [null, Validators.required ],
      unitetime: [null, Validators.required ],
      enabled: [true, Validators.required ],
      packageItemsList:[<any[] | null>(null), [Validators.required]]
    });
    
  }

  ngOnInit(): void {
    this.initMode();
    this.getAllPackagesItems();
  }

  get f() {
    return this.formGroup.controls;
  }

getAllPackagesItems(){
  this.packageItemservice.getPackageItems().subscribe((result: any[]) => {
    this.packageItemsList = result;
    console.log(this.packageItemsList);
  });

  }
  initMode(){
    this.mode = this.actifRoute.snapshot.data['mode'];

    if(this.mode && this.mode == Mode.UPDATE || this.mode == Mode.READ){
      this.idpackage = this.actifRoute.snapshot.params['id'];
      this.formGroup.controls['idPackage'].setValue(this.idpackage);
      if(this.idpackage){
        this.getPackageById(this.idpackage);
      }
    }
  }

  updatUnitetime(unit: String): String{
    if (unit == "Jour")
    return "day";
    if (unit == "Mois")
    return "month";
    else
    return "year"
  }
  
  onSubmit(pack: any) {
    this.spinner = true;
    if(this.mode == Mode.CREATE){
      this.service.createPackage(pack).subscribe(
        (res) => {
          this.route.navigate(['/liste-package']);
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
           message= "Package existe déjà";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: { name: message, action: 'erreur' },
          });
        }
      );
    }
    else if (this.mode == Mode.UPDATE){
      this.service.updatePackage(pack).subscribe(
        (res) => {
          this.route.navigate(['/liste-package']);
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
           message= "erreur !";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: { name: message, action: 'erreur' },
          });
        }
      );
    }

  }

  getPackageById(idPackage:number): void {
    this.spinner = true;
    this.service.getPackage(idPackage).subscribe((result: any) => {
      this.spinner = false;
      this.pack = result;
      console.log(this.pack);
      this.formGroup.controls['libelle'].setValue(result.libelle);
      this.formGroup.controls['description'].setValue(result.description);
      this.formGroup.controls['validity'].setValue(result.validity);
      this.formGroup.controls['unitetime'].setValue(result.unitetime);
      this.formGroup.controls['enabled'].setValue(result.enabled);
      this.formGroup.controls['packageItemsList'].setValue(result.packageItemsList);
    });
  }

}
