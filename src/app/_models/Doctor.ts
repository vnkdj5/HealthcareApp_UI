export class Doctor {
    id: number;
    emailId: string;
    password: string;
    firstName: string;
    lastName: string;
    mobileNo:string;
    specialization:string;
    degree:string;
  
    public constructor(init?: Partial<Doctor >) {
      Object.assign(this, init);
  }
  }