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
