import { DoctorServiceService } from "./../_services/doctor-service.service";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "doctorName"
})
export class DoctorNamePipePipe implements PipeTransform {
  constructor(
    private docService:DoctorServiceService
  ){}
  transform(value: number, level: number): any {
    this.docService.getDoctorDetails(value).subscribe(
      data => {
        if (level == 1)
          return ""   + data.firstName + " " + data.lastName + "[" + value + "]";
        else
          return (
            "" +
            data.firstName +
            " " +
            data.lastName +
            "[" +
            data.specializarion +
            "]"
          );
      },
      error => {
        return "" + value;
      }
    );
    return value+" -"
  }
}
