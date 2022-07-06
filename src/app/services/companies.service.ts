import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ICompaniesService } from './icompanies-service';
import { ICompaniesResponse } from '../infrastructure/interfaces/services/icompanies';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService implements ICompaniesService {

  protected url = "../../assets/companies-mock.json"


  constructor(private http: HttpClient) { }

  list(): Observable<ICompaniesResponse> {
    let  endpoint = "companies"
    return this.http.get<ICompaniesResponse>(`${this.url}/`)
  }

  search(id:string) {
    let  endpoint = `company/${id}`
    return this.http.get(`${this.url}/`)
  }

}
