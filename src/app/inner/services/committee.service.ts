import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Committee} from "../models/committee";

const httpOptions = { headers: new HttpHeaders({    'Content-Type':  'application/json'  })};


@Injectable()
export class CommitteeService {
  constructor(private http: HttpClient, private router: Router) { }
  private committeeUrl = 'http://localhost:8081/api/committee';

  public getAllCommittee() {
    return this.http.get<Committee[]>(this.committeeUrl);
  }

  getCompany(name: string) {
    return this.http.get<Committee>(this.committeeUrl + "/" + name);
  }
  editCommittee(name: string, newName: string) {
    return this.http.put(this.committeeUrl + "/" + name , {
      newName
    })
  }
  createCommittee(name: string) {
    return this.http.post<Committee>(this.committeeUrl, {
      name
    })
  }

  deleteCommittee(name: string) {
    return this.http.delete<Committee>(this.committeeUrl  + "/" + name )
  }

}
