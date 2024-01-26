class Employee {
  constructor(name, id, emailAddress) {
    this.values = [name, id, emailAddress];
  }
  getEmployeeDetails() {
    return this.values;
  }
}

const me = new Employee("Bart", "001", "barpahl@publicis.com");

console.log(me.getEmployeeDetails());
