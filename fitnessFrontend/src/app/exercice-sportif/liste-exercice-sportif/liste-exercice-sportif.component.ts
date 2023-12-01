import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { ExerciceSportifService } from 'src/app/services/exercice-sportif/exercice-sportif.service';

@Component({
  selector: 'app-liste-exercice-sportif',
  templateUrl: './liste-exercice-sportif.component.html',
  styleUrls: ['./liste-exercice-sportif.component.scss']
})
export class ListeExerciceSportifComponent {
  public exercices: any[] = [];
  public spinner: boolean = false;
  public exercice: any;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private service: ExerciceSportifService,
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
    this.route.navigate(['/create-exercice-sportif']);
  }
  
  getAll(): void {
    this.spinner = true;
    this.service.getExerciceSportifs().subscribe((result: any[]) => {
      this.spinner = false;
      this.exercices = result;
    });
  }

  updateExerciceSportif(exerciceSportif: any){
    this.route.navigate([`/update-exercice-sportif/${exerciceSportif.idExercice}`]);
  }

  showExerciceSportif(exerciceSportif: any){
    this.route.navigate([`/exercice-sportif/${exerciceSportif.idExercice}`]);
  }

  changetype(exercice: any): string {
    
    if (exercice == 'Poidsducorps')
    return 'Poids du corps'
  else
  return exercice;
  }

  deleteExerciceSportif(idExercice: number){
    this.spinner = true;
    this.service.deleteExerciceSportif(idExercice).subscribe(
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
          data: { name: "lors de la suppression d'exercice", action: 'erreur' },
        });
      }
    );
  }

}
