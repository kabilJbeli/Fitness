import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { IngredientService } from 'src/app/services/ingredient/ingredient.service';

@Component({
  selector: 'app-liste-ingredent',
  templateUrl: './liste-ingredent.component.html',
  styleUrls: ['./liste-ingredent.component.scss']
})
export class ListeIngredentComponent {
  public ingredients: any[] = [];
  public spinner: boolean = false;
  public ingredient: any;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private service: IngredientService,
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
    this.route.navigate(['/create-ingredient']);
  }
  
  getAll(): void {
    this.spinner = true;
    this.service.getIngredients().subscribe((result: any[]) => {
      this.spinner = false;
      this.ingredients = result;
    });
  }

  updateIngredient(ingredient: any){
    this.route.navigate([`/update-ingredient/${ingredient.idIngredient}`]);
  }

  showIngredient(ingredient: any){
    this.route.navigate([`/ingredient/${ingredient.idIngredient}`]);
  }

  deleteIngredient(idIngredient: number){
    this.spinner = true;
    this.service.deleteIngredient(idIngredient).subscribe(
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
