export interface ICompanies {
  approved: boolean;
  company_name: string;
  id: number;
  source: string;
  web_site: string;
}

export interface ICompaniesResponse {
  result: ICompanies[]
}

export interface ICompanyRequest {
  company_name: string;
  web_site: string;
  source?: string;
}
