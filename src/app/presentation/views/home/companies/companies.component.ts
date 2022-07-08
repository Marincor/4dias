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
  hasCompany: boolean = false;
  loading: boolean = true;
  constructor(private companiesUseCases: CompaniesUseCases) {}

  ngOnInit() {
    this.getListCompanies();
  }

  getListCompanies() {
    this.companiesUseCases.getCompanies().subscribe((res) => {
      let filteredCompanies = res.result.filter(company => company.approved === true)
      this.setCompanies(filteredCompanies);
      if(res.result.length) {
        this.hasCompany = true
      }
    });
    this.loading = false;
  }

  setCompanies(companies: ICompanies[]) {
    this.listCompanies = companies;
  }
}
