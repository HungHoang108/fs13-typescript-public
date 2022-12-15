import { type } from "os";
import { Branch } from "./types/branch";
import { Customer } from "./types/customer";

class Bank {
  private name: string;
  private branches: Branch[];
  public constructor(name: string) {
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
        branch.customers.find((cus) => cus.id === customer.id)
      )
    ) {
      return false;
    }
    this.branches.find((b) => {
      if (b.name === branch.name) {
        b.customers.push(customer);
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
        if (b.name === branch.name) {
          b.customers.find((cus) => {
            if (cus.id === customerId) {
              cus.transactionAmount = amount;
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
      if (b.name === branchName) {
        return b;
      }
    });
    return null;
  }

  checkBranch(branch: Branch): boolean {
    if (this.branches.find((b) => b.name === branch.name)) {
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
