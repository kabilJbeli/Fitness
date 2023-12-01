import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mode } from 'src/app/Enums/Mode';
import { ActionModalComponent } from 'src/app/action-modal/action-modal.component';
import { ExerciceSportifService } from 'src/app/services/exercice-sportif/exercice-sportif.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-manage-exercice-sportif',
  templateUrl: './manage-exercice-sportif.component.html',
  styleUrls: ['./manage-exercice-sportif.component.scss']
})
export class ManageExerciceSportifComponent {
  public formGroup: FormGroup;
  public spinner: boolean = false;
  mode!: string;
  idExercice: any;
  exerciceSportif: any;
  display: boolean = false;
  public niveaux: String[] = ['Hard', 'Intermediate', 'Beginner'];
  public types: String[] = ['Machine', 'Haltere' , 'Barre', 'Kettlbell', 'Poids du corps', 'Elastique'];
  selectedFiles?: any;
  currentFile?: File;
  progress = 0;
  message = '';
  source: any="";
  fileInfos?: Observable<any>;


  constructor(
    private formBuilder: FormBuilder,
    private service: ExerciceSportifService,
    private route: Router,
    public dialog: MatDialog,
    private actifRoute: ActivatedRoute,
  ) {
    this.formGroup = this.formBuilder.group({
      idExercice: [null],
      description: [null, [Validators.required]],
      niveau: [null, [Validators.required]],
      type: [null, [Validators.required]],
      homeexercice: [false, Validators.required ],
      video: [null ],
    });
    
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }



  ngOnInit(): void {
    this.initMode();
  }

  get f() {
    return this.formGroup.controls;
  }

  initMode(){
    this.mode = this.actifRoute.snapshot.data['mode'];
    if (this.mode && this.mode == Mode.CREATE){
      this.formGroup.get('video')?.setValidators(Validators.required)
      this.display= true;
    }


    if(this.mode && this.mode == Mode.UPDATE || this.mode == Mode.READ){
      this.formGroup.get("video")?.clearAsyncValidators;
      this.idExercice = this.actifRoute.snapshot.params['id'];
      this.formGroup.controls['idExercice'].setValue(this.idExercice);
      if(this.idExercice){
        this.getExerciceSportifById(this.idExercice);
      }
    }
  }
  checker(){
    this.display = !this.display;
  }
  
  onSubmit(exerciceSportif: any) {
    this.progress = 0;
    exerciceSportif.type = this.changetype(exerciceSportif.type);
    let message = '';
    if (this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        if (this.mode == Mode.CREATE){
          this.service.createExerciceSportif(exerciceSportif, this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                  this.route.navigate(['/list-exercice-sportif']);
                  this.dialog.open(ActionModalComponent, {
                    width: '500px',
                    data: {  action: 'confirm' },
                  });
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
  
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                if (err.error =='2')
                 message= "Exercice Sportif existe déjà";
               this.dialog.open(ActionModalComponent, {
                 width: '500px',
                 data: { name: message, action: 'erreur' },
               });
              }
            }
          });
        } else if (this.mode == Mode.UPDATE){
  
          this.service.updateExerciceSportif(exerciceSportif, this.currentFile).subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                  this.route.navigate(['/list-exercice-sportif']);
                  this.dialog.open(ActionModalComponent, {
                    width: '500px',
                    data: {  action: 'confirm' },
                  });
              }
            },
            error: (err: any) => {
              console.log(err);
              this.progress = 0;
  
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                if (err.error =='2')
                 message= "Exercice Sportif existe déjà";
               this.dialog.open(ActionModalComponent, {
                 width: '500px',
                 data: { name: message, action: 'erreur' },
               });
              }
            }
          });
        }
    }
  }  else if (this.mode == Mode.UPDATE){
    this.spinner = true;
    this.service.updateExerciceSportifwithoutfile(exerciceSportif).subscribe(
      (res) => {
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
  
  }

  changetype(exercice: any): string {
    if (exercice == 'Poids du corps')
    return 'Poidsducorps'
  else
  return exercice;
  }
  typechange(exercice: any): string {
    if (exercice == 'Poidsducorps')
    return 'Poids du corps'
  else
  return exercice;
  }

  getExerciceSportifById(idExercice:number): void {
    this.spinner = true;
    this.service.getExerciceSportif(idExercice).subscribe((result: any) => {
      this.spinner = false;
      this.exerciceSportif = result;
      this.formGroup.controls['description'].setValue(result.description);
      this.formGroup.controls['niveau'].setValue(result.niveau);
      this.formGroup.controls['idExercice'].setValue(result.idExercice);  
      this.formGroup.controls['type'].setValue(this.typechange(result.type));  
      this.formGroup.controls['homeexercice'].setValue(result.homeexercice);  
      this.source = 'http://102.219.178.113/'+ result.imagepath;
    });
  }
}
