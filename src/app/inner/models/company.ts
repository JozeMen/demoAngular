import {Committee} from "./committee";

export interface Company {
  id:number;
  name: string;
  committeeDTOList: Committee[];
}
