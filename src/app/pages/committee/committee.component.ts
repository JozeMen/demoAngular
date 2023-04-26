import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommitteeService} from "../../inner/services/committee.service";
import {Committee} from "../../inner/models/committee";
import {HttpHeaders} from "@angular/common/http";
import {CompanyService} from "../../inner/services/company.service";
import {Company} from "../../inner/models/company";


@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit{
  allCommittees!: Committee[];
  committee!: Committee;
  err: boolean = false;

  smth!:string;
  newName!: string;
  isEditable!: string;
  isCreatable: boolean = false;
  companyName!: string;
  companies!: Company[];
  readyToCreateCommittee!: string;
  constructor(private router: Router, private committeeService: CommitteeService, private companyService: CompanyService) {
  }

  onSelect(committee: Committee) {

  }
  ngOnInit(): void {
    this.committeeService.getAllCommittee().subscribe({
        next: (data) => {
          this.allCommittees = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
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

  editCommittee(oldname: string,value: string) {
    this.committeeService.editCommittee(oldname, value).subscribe({
    })
  }
  createCommittee(value0: string, value: string) {
    this.committeeService.createCommittee(value0, value).subscribe({
      next: (data) => {}
    })
  }

  deleteCommittee(value: string) {
    this.committeeService.deleteCommittee(value).subscribe({
      next: (data) => {}
    })
  }
}
