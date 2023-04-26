import {Component, OnInit} from '@angular/core';
import {Company} from "../../inner/models/company";
import {Router} from "@angular/router";
import {CompanyService} from "../../inner/services/company.service";
import {CommitteeService} from "../../inner/services/committee.service";
import {Committee} from "../../inner/models/committee";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies!: Company[];
  selectedCompany!: Company;
  err: boolean = false;
  company_nameIsReadable: boolean = false;
  company_committeeAreWriteable: boolean = false;

  str!: string;
  newCompany!: string;
  newName!: string;
  isEditable!: string;
  allCommittees!: Committee[];


  constructor(private router: Router, private companyService: CompanyService) {}

  onSelect(company: Company) {

  }

  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe({
        next: (data) => {
          this.companies = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );

  }


  createCompany(value: string){
    this.companyService.createCompany(value).subscribe({
      next: (data) => {}
    })
  }
  deleteCompany(value: string) {
    this.companyService.deleteCompany(value).subscribe({
      next: (data) => {}
    })
  }
  editCompany(value: string, value1: string) {
    this.companyService.editCompany(value, value1).subscribe({
    })

  }
}
