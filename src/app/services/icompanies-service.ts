import { Observable } from "rxjs";
import { ICompaniesResponse, ICompanyRequest } from "../infrastructure/interfaces/services/icompanies";

export interface ICompaniesService {
  list: () =>  Observable<ICompaniesResponse>;
  search: (id: string) => Observable<Object>;
  register: (data: ICompanyRequest) => Observable<Object>
}
