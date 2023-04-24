import {Component, OnInit} from '@angular/core';
import {Committee} from "../../inner/models/committee";
import {Router} from "@angular/router";
import {CommitteeService} from "../../inner/services/committee.service";
import {PersonService} from "../../inner/services/person.service";
import {Person} from "../../inner/models/person";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  allPeople!: Person[];
  person!: Person;
  err: boolean = false;
  isEditable!: number;

  name!: string;
  birthdate!: string;
  homeAddress!: string;
  scienceGrade!: string;

  constructor(private router: Router, private personService: PersonService) {
  }

  onSelect(committee: Committee) {

  }
  ngOnInit(): void {
    this.personService.getAllPeople().subscribe({
        next: (data) => {
          this.allPeople = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }

  editPerson(oldname: string,value: string) {
    this.personService.editPerson(oldname, value).subscribe({
    })
  }
  createPerson(value: string, value1: string, value3: string, value4: string ) {
    this.personService.createPerson(value, value1, value3, value4).subscribe({
      next: (data) => {}
    })
  }

  deletePerson(value: number) {
    this.personService.deletePersonById(value).subscribe({
      next: (data) => {}
    })
  }
}
