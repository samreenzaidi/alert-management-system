import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PopupAddComponent } from './components/popup-add/popup-add.component';
import { PopupConfigureComponent } from './components/popup-configure/popup-configure.component';



@NgModule({
  declarations: [
    PopupAddComponent,
    PopupConfigureComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PopupAddComponent,
    PopupConfigureComponent,
    HomeComponent
  ]
})
export class AlertManagementSystemModule { }
