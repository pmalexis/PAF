export class User {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  password: string;


  constructor(lastName = '', firstName = '', email = '', password = '') {
    this.id = null;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
  }
}
