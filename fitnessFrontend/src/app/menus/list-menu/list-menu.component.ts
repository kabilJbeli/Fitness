import {Component} from '@angular/core';
import {LazyLoadEvent} from "primeng/api";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ActionModalComponent} from "../../action-modal/action-modal.component";
import {MenuService} from "../../services/menu/menu.service";

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {

  public menuList: any[] = [];
  public spinner: boolean = false;
  lazyLoadEvent!: LazyLoadEvent;

  constructor(private service: MenuService,
              private route: Router, public dialog: MatDialog,) {
    this.spinner = true;
  }

  ngOnInit(): void {
    this.getAll();
  }

  loadData(event: LazyLoadEvent): void {
    this.lazyLoadEvent = event;
  }

  addNew() {
    this.route.navigate(['/create-menu']);
  }

  getAll(): void {
    this.spinner = true;
    this.service.getMenusList().subscribe((result: any[]) => {
      this.spinner = false;
      this.menuList = result;
    },error => {
      this.spinner = false;

    });
  }

  updateRepas(repas: any) {
    this.route.navigate([`/update-menu/${repas.idmenus}`]);
  }

  showRepas(repas: any) {
    this.route.navigate([`/menu/${repas.idmenus}`]);
  }

  deleteRepas(idMenu: number) {
    this.spinner = true;
    this.service.deleteMenu(idMenu).subscribe(
      (result) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {action: 'confirm'},
        });
        this.loadData(this.lazyLoadEvent);
        this.getAll();
      },
      (error) => {
        this.spinner = false;
        this.dialog.open(ActionModalComponent, {
          width: '500px',
          data: {name: "Impossible d'effectuer cette opération", action: 'erreur'},
        });
      }
    );
  }

}
