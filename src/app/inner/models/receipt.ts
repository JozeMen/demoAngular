import {Payment} from "./payment";

export interface Receipt {
   receiptId: number;
   writemDate: Date;
   sumOfMoney: number;
   paymentDTOList: Payment[];
}
