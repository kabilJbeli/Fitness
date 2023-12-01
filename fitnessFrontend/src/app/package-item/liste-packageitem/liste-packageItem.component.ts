import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Mode } from 'src/app/Enums/Mode';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { PackageItemService } from 'src/app/services/package-item/package-item.service';

@Component({
  selector: 'app-liste-Package-item',
  templateUrl: './liste-PackageItem.component.html',
  styleUrls: ['./liste-PackageItem.component.scss']
})
export class ListePackageItemComponent {

  public packageItems: any[] = [];
  public spinner: boolean = false;
  public PackageItem: any;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private service: PackageItemService,
              private route: Router,public dialog: MatDialog,) 
  {
    this.spinner=true;
}

  ngOnInit(): void {
    this.getAll();
  }
  
  loadData(event: LazyLoadEvent): void {
    this.lazyLoadEvent = event;
}
  addNew(){
    this.route.navigate(['/create-package-item']);
  }
  
  getAll(): void {
    this.spinner = true;
    this.service.getPackageItems().subscribe((result: any[]) => {
      this.spinner = false;
      this.packageItems = result;
    });
  }

  updatePackageItem(pack: any){
    this.route.navigate([`/update-package-item/${pack.idPackageItem}`]);
  }

  showPackageItem(pack: any){
    this.route.navigate([`/packageItem/${pack.idPackageItem}`]);
  }

  deletePackageItem(idPackageItem: number){
    this.spinner = true;
    this.service.deletePackageItem(idPackageItem).subscribe(
      (result) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: { action: 'confirm' },
        });
        this.loadData(this.lazyLoadEvent);
        this.getAll();
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
