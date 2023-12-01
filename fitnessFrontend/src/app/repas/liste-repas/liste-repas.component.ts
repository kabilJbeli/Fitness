import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { RepasService } from 'src/app/services/repas/repas.service';

@Component({
  selector: 'app-liste-repas',
  templateUrl: './liste-repas.component.html',
  styleUrls: ['./liste-repas.component.scss']
})
export class ListeRepasComponent {
  
  public RepasList: any[] = [];
  public spinner: boolean = false;
  public Repas: any;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private service: RepasService,
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
    this.route.navigate(['/create-repas']);
  }
  
  getAll(): void {
    this.spinner = true;
    this.service.getRepasList().subscribe((result: any[]) => {
      this.spinner = false;
      this.RepasList = result;
    });
  }

  updateRepas(repas: any){
    this.route.navigate([`/update-repas/${repas.idRepas}`]);
  }

  showRepas(repas: any){
    this.route.navigate([`/repas/${repas.idRepas}`]);
  }

  deleteRepas(idRepas: number){
    this.spinner = true;
    this.service.deleteRepas(idRepas).subscribe(
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
