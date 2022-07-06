import { Observable } from 'rxjs';
import { ICompaniesResponse } from '../infrastructure/interfaces/services/icompanies';

export interface ICompaniesUseCases {
  getCompanies: () =>  Observable<ICompaniesResponse>;
  getCompany: (id: string) => Observable<Object>
}
