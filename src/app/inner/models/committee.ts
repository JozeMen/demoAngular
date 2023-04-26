import {Person} from "./person";

export interface Committee {
  committeeId:number;
  name: string;
  personDTOList: Person[];
}
