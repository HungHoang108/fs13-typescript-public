import { Customer } from "./customer";

export class Branch {
  name: string;
  customers: Array<Customer>;
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customers.map((customer) => customer.name);
  }
  addCustomer(customer: Customer): boolean {
    this.customers.map((cus) => {
      if (cus.id === customer.id) {
        return false;
      }
    });
    return true;
  }

  addCustomerTransaction(cusId: string, transactionAmount: number): boolean {
    if (cusId && transactionAmount) {
      return true;
    } else {
      return false;
    }
  }
  findCustomer(customerId : string) : Customer | null {
    // this.customers.map(customer => customer.id === customerId)
    this.customers.find(customer => {
        if(customer.id === customerId) {
            return customer
        } 
    })
    return null

  }
}
