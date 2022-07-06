import { HomeComponent } from './presentation/views/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './presentation/shared/top-bar/top-bar.component';
import { CompanyComponent } from './presentation/views/company/company.component';
import {ButtonModule} from 'primeng/button';
import { CompaniesComponent } from './presentation/views/home/companies/companies.component';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    CompanyComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
