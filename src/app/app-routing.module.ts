import { CompanyComponent } from './presentation/views/company/company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/views/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "company", component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
