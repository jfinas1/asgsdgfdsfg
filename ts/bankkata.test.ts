import BankKata from './bankkata';


describe('answer', () => {
  it('to life the universe and everything', () => {
    let b = new BankKata();
    expect(b.printStatement()).toEqual("Date,Deposit,Withdraw,Balance");
  });
});

