import { CompanyComponent } from './presentation/views/company/company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/views/home/home.component';
import { NewCompanyComponent } from './presentation/views/new-company/new-company.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "company", component: CompanyComponent
  },
  {
    path: "new-company", component: NewCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
