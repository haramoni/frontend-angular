import { Component, OnInit } from "@angular/core";
import { Appointment } from "src/app/shared/model/appointment.model";
import { AppointmentService } from "src/app/shared/service/appointment.service";

@Component({
  selector: "app-get-appointments",
  templateUrl: "get-appointments.component.html",
  styleUrls: ["get-appointments.component.css"],
})
export class GetAppointmentsComponent implements OnInit {
  appointmentPrevious!: Appointment[];
  data!: string;
  hour!: any;

  constructor(public appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment() {
    this.appointmentService.getAppointmentList().subscribe((data) => {
      this.appointmentPrevious = data;

      data.map((item: any, index: any) => {
        let manipulatedValues = item.data.split("T");
        let formattedData = manipulatedValues[0].split("-");

        this.data = `${formattedData[2]}/${formattedData[1]}/${formattedData[0]}`;
      });
    });
  }
}
