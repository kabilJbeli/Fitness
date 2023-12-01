import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Mode } from 'src/app/Enums/Mode';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { PackageItemService } from 'src/app/services/package-item/package-item.service';

@Component({
  selector: 'app-packageitem',
  templateUrl: './packageitem.component.html',
  styleUrls: ['./packageitem.component.scss']
})
export class PackageItemComponent {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  idPackageItem: any;
  pack: any;
  packageItem: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: PackageItemService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      idPackageItem: [null],
      description: [null, [Validators.required]],
      prix: [null, Validators.required],
      reduction: [null, Validators.required ],
      needspecificsupportofnutro: [false, Validators.required ],
      needspecificsupportofcoach: [false, Validators.required ],
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
      this.idPackageItem = this.actifRoute.snapshot.params['id'];
      this.formGroup.controls['idPackageItem'].setValue(this.idPackageItem);
      if(this.idPackageItem){
        this.getPackageItemById(this.idPackageItem);

      }
    }
  }
  
  onSubmit(packageItem: any) {
    this.spinner = true;
    if(this.mode == Mode.CREATE){
      this.service.createPackageItem(packageItem).subscribe(
        (res) => {
          this.route.navigate(['/liste-package-item']);
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
           message= "Package Item existe déjà";
          this.dialog.open(ActionModalComponent, {
            width: '500px',
            data: { name: message, action: 'erreur' },
          });
        }
      );
    } else if (this.mode == Mode.UPDATE){
      this.service.updatePackageItem(packageItem).subscribe(
        (res) => {
          this.route.navigate(['/liste-package-item']);
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

  getPackageItemById(idPackageItem:number): void {
    this.spinner = true;
    this.service.getPackageItem(idPackageItem).subscribe((result: any) => {
      this.spinner = false;
      this.packageItem = result;
      this.formGroup.controls['idPackageItem'].setValue(result.idPackageItem);
      this.formGroup.controls['description'].setValue(result.description);
      this.formGroup.controls['prix'].setValue(result.prix);
      this.formGroup.controls['reduction'].setValue(result.reduction);
     
    });
  }
}
