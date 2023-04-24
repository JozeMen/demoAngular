import {Person} from "./person";

export interface Committee {
  name: string;
  personDTOList: Person[];
}
