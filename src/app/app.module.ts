import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertManagementSystemModule } from './alert-management-system/alert-management-system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertManagementSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
