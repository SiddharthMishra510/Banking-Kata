import { Account } from "../src/account";

describe('Account', () => {
    it('should not throw when making a deposit', () => {
        const account = new Account();

        expect(() => {
            account.deposit(1);
        }).not.toThrow();
    });
});