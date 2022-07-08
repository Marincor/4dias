import { Observable } from 'rxjs';
import { ICompaniesUseCases } from './icompanies.usecases';
import { CompaniesService } from "../services/companies.service";
import { Injectable } from '@angular/core';
import { ICompaniesResponse, ICompanyRequest } from '../infrastructure/interfaces/services/icompanies';

@Injectable({
  providedIn: 'root'
})

export class CompaniesUseCases implements ICompaniesUseCases {
  constructor(private companiesService: CompaniesService) {  }

  getCompanies(): Observable<ICompaniesResponse> {
    return this.companiesService.list();
  }

  getCompany(id: string) {
    return this.companiesService.search(id)
  }

  registerCompany(data:ICompanyRequest ): Observable<any> {
    return this.companiesService.register(data);
  };
}
