class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = firstname + " " + lastname;
    this.email = (firstname + "." + lastname + "@company.com").toLowerCase();
  }
}

const example1 = new Employee("Ezekiel", "Mesfin");

console.log(example1);
