import { Customer } from "./customer";

export class Branch {
  private name: string;
  private customers: Array<Customer>;
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customer: Customer): boolean {
    this.customers.map((cus) => {
      if (cus.getId() === customer.getId()) {
        return false;
      }
    });
    this.customers.push(customer);
    return true;
  }

  addCustomerTransaction(cusId: string, transactionAmount: number): boolean {
    if (transactionAmount) {
      this.customers.find((customer) => {
        if (customer.getId() === cusId) {
          customer.addTransactions(transactionAmount);
        }
      });
      return true;
    } else {
      return false;
    }
  }
  findCustomer(customerId: string): Customer | null {
    this.customers.find((customer) => {
      if (customer.getId() === customerId) {
        return customer;
      }
    });
    return null;
  }
}
