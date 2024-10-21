import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount';

const companyAccount = new CompanyAccount('Empresa XYZ', 12345);
console.log('--- Company Account ---');
companyAccount.deposit(100); 
companyAccount.withdraw(50); 
companyAccount.getLoan(200); 
companyAccount.getBalance();

console.log('');

const bonusAccount = new BonusAccount('Cliente ABC', 67890);
console.log('--- Bonus Account ---');
bonusAccount.deposit(100);
bonusAccount.getBalance();
bonusAccount.withdraw(30);
bonusAccount.getBalance();

console.log('');

const peopleAccount = new PeopleAccount(987654321, 'João Silva', 54321);
console.log('--- People Account ---');
peopleAccount.deposit(200);
peopleAccount.getBalance();
peopleAccount.withdraw(100); 
peopleAccount.getBalance();