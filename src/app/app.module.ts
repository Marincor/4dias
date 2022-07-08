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
import { NewCompanyComponent } from './presentation/views/new-company/new-company.component';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './presentation/shared/spinner/spinner.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    CompanyComponent,
    CompaniesComponent,
    NewCompanyComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    RouterModule,
    InputTextModule,
    TooltipModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    ToastModule,
    BrowserAnimationsModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
