import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ListboxModule} from "primeng/listbox";
import {RadioButtonModule} from "primeng/radiobutton";
import {AccordionModule} from "primeng/accordion";
import {PanelModule} from "primeng/panel";
import {CalendarModule} from "primeng/calendar";
import {FocusTrapModule} from "primeng/focustrap";
import {CheckboxModule} from "primeng/checkbox";
import {TreeTableModule} from "primeng/treetable";
import {TreeModule} from "primeng/tree";
import {DialogModule} from "primeng/dialog";
import {MenuModule} from "primeng/menu";
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import {SidebarModule} from 'primeng/sidebar';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    ButtonModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    CalendarModule,
    TableModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
    MenuModule,
    MenubarModule,
    DividerModule,
    PasswordModule,
    SidebarModule,
    InputNumberModule 

  ],
  exports:[
    TableModule,
    DialogModule,
    MenuModule,
    ConfirmDialogModule,
    DropdownModule,
    MenubarModule,
    ButtonModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    CalendarModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
    DividerModule,
    PasswordModule,
    SidebarModule,
    InputNumberModule 
  ]
})
export class SharedModule { }
