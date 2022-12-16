import { Branch } from "./branch";
import { Customer } from "./customer";

export class Bank {
  private name: string;
  private branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch): boolean {
    if (this.checkBranch(branch) === true) {
      this.branches.push(branch);
      return true;
    } else {
      return false;
    }
  }
  addCustomer(branch: Branch, customer: Customer): boolean {
    if (
      this.branches.find((branch) =>
        branch.getCustomers().find((cus) => cus.getId() === customer.getId())
      )
    ) {
      return false;
    }
    this.branches.find((b) => {
      if (b.getName() === branch.getName()) {
        b.getCustomers().push(customer);
      }
    });
    return true;
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: string,
    amount: number
  ): boolean {
    if (amount) {
      this.branches.find((b) => {
        if (b.getName() === branch.getName()) {
          b.getCustomers().find((cus) => {
            if (cus.getId() === customerId) {
              cus.addTransactions(amount);
              return true;
            }
          });
        }
      });
    }
    return false;
  }

  findBranchByName(branchName: string): Array<Branch> | null {
    this.branches.map((b) => {
      if (b.getName() === branchName) {
        return b;
      }
    });
    return null;
  }

  checkBranch(branch: Branch): boolean {
    if (this.branches.find((b) => b.getName() === branch.getName())) {
      return false;
    }
    return true;
  }

  listCustomers(branch: Branch, bool: boolean): boolean {
    if (branch) {
      return true;
    } else {
      return false;
    }
  }
}
