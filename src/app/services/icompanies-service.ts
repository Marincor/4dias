import { Observable } from "rxjs";
import { ICompaniesResponse } from "../infrastructure/interfaces/services/icompanies";

export interface ICompaniesService {
  list: () =>  Observable<ICompaniesResponse>;
  search: (id: string) => Observable<Object>;
}
