import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../application.service';
import {Router} from '@angular/router';
import {ActionModalComponent} from '../action-modal/action-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {NgxImageCompressService} from "ngx-image-compress";

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateUserComponent implements OnInit {

  public formGroup: FormGroup;
  public spinner: boolean = false;
  public selectedFile: any;

  public roles: String[] = ['Admin', 'Coach', 'Nutritionist'];

  constructor(
    private formBuilder: FormBuilder,
    private service: ApplicationService,
    private route: Router,
    public dialog: MatDialog,
    private imageCompress: NgxImageCompressService
  ) {
    let MOBILE_PATTERN = "^[0-9]{8}";
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{8,}$')]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(MOBILE_PATTERN)]],
      birthdate: [null, [Validators.required]],

    });
  }

  updateDate(date: Date) {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
  }

  async onFileChanged(event: any) {
    event.preventDefault();
    this.selectedFile = event.target.files[0];
    const base64Image = await this.getAsBase64(this.selectedFile)
    console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(base64Image));
    this.imageCompress
      .compressFile(base64Image, 1, 50, 50) // 50% ratio, 50% quality
      .then(compressedImage => {
        this.selectedFile = compressedImage;
        console.log('Size in bytes after compression is now:', this.imageCompress.byteCount(compressedImage));
      });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formGroup.controls;
  }

  readFile(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.addEventListener("loadend", (e) => resolve(e.target?.result));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(file);
      reader.onload = () => {
      };
    });
  }

  async getAsBase64(file: File | undefined) {
    if (file != undefined)
      return await this.readFile(file);
    return new Uint8Array();
  }

  onSubmit(user: any) {
    user.email = user.email.toLowerCase()
    this.spinner = true;
    if (user.role == 'Coach' || user.role == 'Nutritionist') {
      user.coachpic = {image: this.selectedFile};
    }
    user.birthdate = this.updateDate(user.birthdate);
    this.service.createUser(user).subscribe(
      (res) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {action: 'confirm'},
        });
        this.route.navigate(['/Manage-user']);
      },
      (error) => {
        console.log(error);
        this.spinner = false;
        let message = '';
        if (error.error == '2')
          message = "Adresse mail existe déjà";
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {name: message, action: 'erreur'},
        });
      }
    );
  }
}
