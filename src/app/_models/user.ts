export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth:Date;
  address:string;

  public constructor(init?: Partial<User >) {
    Object.assign(this, init);
}
}