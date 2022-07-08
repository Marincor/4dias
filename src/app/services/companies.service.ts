import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompaniesService } from './icompanies-service';
import {
  ICompaniesResponse,
  ICompanyRequest,
} from '../infrastructure/interfaces/services/icompanies';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService implements ICompaniesService {
  protected url = 'https://fourdayswork.herokuapp.com';

  constructor(private http: HttpClient) {}

  list(): Observable<ICompaniesResponse> {
    let endpoint = 'companies';
    return this.http.get<ICompaniesResponse>(`${this.url}/${endpoint}`);
  }

  search(id: string) {
    let endpoint = `company/${id}`;
    return this.http.get(`${this.url}/${endpoint}`);
  }

  register(data: ICompanyRequest) {
    let endpoint = `company`;
    return this.http.post(`${this.url}/${endpoint}`, data);
  }
}
