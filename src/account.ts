export class Account {
    deposit(number: number) {
if(number < 0)
{
    throw new Error("Deposit must be greater than 0");
}
    }
}