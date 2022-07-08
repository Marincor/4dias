import { ICompanyRequest } from './../../../infrastructure/interfaces/services/icompanies';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompaniesUseCases } from 'src/app/usecases/companies.usecases';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss'],
})
export class NewCompanyComponent implements OnInit {
  newCompanyForm!: FormGroup;
  loading: boolean = false;
  errorMessage:string = "";

  constructor(
    private companiesUseCases: CompaniesUseCases,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newCompanyForm = this.fb.group({
      company_name: [null],
      web_site: [null],
      source: [null],
    });
  }

  informUser(severity:"success"|"error", summary: "Success" | "Error", detail: string ) {
    this.messageService.add({key:"info",severity:severity, summary:summary, detail:detail});
}

cleanForm() {
  this.newCompanyForm.get("company_name")?.setValue("")
  this.newCompanyForm.get("web_site")?.setValue("")
  this.newCompanyForm.get("source")?.setValue("")
}

  registerNewCompany() {
    if (this.newCompanyForm.status === 'VALID') {
      this.loading = true;
      let obj: ICompanyRequest = {
        company_name: this.newCompanyForm.value.company_name,
        web_site: this.newCompanyForm.value.web_site,
        source: this.newCompanyForm.value.source,
      };
      console.log(obj);
      this.companiesUseCases.registerCompany(obj).subscribe(
        (res) => {
          console.log('result', res);
          setTimeout(() => {
            this.loading = false;
          }, 1500);
          this.informUser('success', "Success", "Cadastro enviado com sucesso!")
          this.cleanForm()
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 2000);
        },
        (err: HttpErrorResponse) => {
          console.log('err', err.error.message);
          let message = ""
          if(err.error.message === "This company is already registered") {
            console.log("68")
            message = "Essa empresa já foi sugerida e ainda está em análise!"
          } else {
            message = "Algo deu errado, por favor tente novamente mais tarde, ou contacte o idealizador desse projeto!"
          }
          setTimeout(() => {
            this.loading = false;
          }, 1500);

          this.informUser("error", "Error", message)
        }
      );
    }
  }

  onchangeInput(e: any) {
    console.log(typeof e);
    console.log(e);
  }
}
