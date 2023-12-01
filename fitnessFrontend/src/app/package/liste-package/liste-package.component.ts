import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { PackageService } from 'src/app/services/package/package.service';

@Component({
  selector: 'app-liste-package',
  templateUrl: './liste-package.component.html',
  styleUrls: ['./liste-package.component.scss']
})
export class ListePackageComponent {
  public packages: any[] = [];
  public spinner: boolean = false;
  lazyLoadEvent!: LazyLoadEvent;
  

  constructor(private service: PackageService,
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
    this.route.navigate(['/create-package']);
  }
  
  getAll(): void {
    this.spinner = true;
    this.service.getPackages().subscribe((result: any[]) => {
      this.spinner = false;
      this.packages = result;
    });
  }

  updatePackage(pack: any){
    this.route.navigate([`/update-package/${pack.idPackage}`]);
  }

  showPackage(pack: any){
    this.route.navigate([`/package/${pack.idPackage}`]);
  }

  deletePackage(idPackage: any){
    console.log(idPackage);
    this.spinner = true;
    this.service.deletePackage(idPackage).subscribe(
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

  getTotalPrice(packageItems:any[]):number{
    let somme:number=0;
     packageItems.forEach((item:any)=>{somme= somme+ item.prix});
     return somme;
  }
  getTotalPriceafterremise(packageItems:any[]):number{
    let somme:number=0;
     packageItems.forEach((item:any)=>{
      if (item.reduction > 0){
        somme= somme+ (item.prix - item.prix * item.reduction/100)
      }
      else{
        somme= somme+ item.prix
      }
    });
     return somme;
  }
}
