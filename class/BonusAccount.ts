import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositBonus = (amount: number): void => {
      this.deposit(amount + 10)
    }
}