import { Observable } from 'rxjs';
import { ICompaniesResponse, ICompanyRequest } from '../infrastructure/interfaces/services/icompanies';

export interface ICompaniesUseCases {
  getCompanies: () =>  Observable<ICompaniesResponse>;
  getCompany: (id: string) => Observable<Object>
  registerCompany: (data: ICompanyRequest) =>  any
}
