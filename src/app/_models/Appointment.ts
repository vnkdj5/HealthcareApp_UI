import { Time } from "@angular/common";

export class Appointment {
    id:number;
    patientId:number;
    subject:string;
    visitDate:Date;
    timeslot:Time;
    description:string;
    doctorId:number
    public constructor(init?: Partial<Appointment >) {
        Object.assign(this, init);
    }
}
