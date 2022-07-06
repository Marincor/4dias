import { Component, OnInit } from '@angular/core';
import { ICompanies } from 'src/app/infrastructure/interfaces/services/icompanies';
import { CompaniesUseCases } from 'src/app/usecases/companies.usecases';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  listCompanies?: ICompanies[];

  constructor(private companiesUseCases: CompaniesUseCases) {}

  ngOnInit() {
    this.getListCompanies();
  }

  getListCompanies() {
    this.companiesUseCases.getCompanies().subscribe((res) => {
      this.setCompanies(res.result);
    });
  }

  setCompanies(companies: ICompanies[]) {
    this.listCompanies = companies;
  }
}
