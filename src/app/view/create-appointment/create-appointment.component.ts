import { KeyValuePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Client } from "src/app/shared/model/client.model";
import { AgendaService } from "src/app/shared/service/agenda.service";
import { AppointmentService } from "src/app/shared/service/appointment.service";
import { ClientService } from "src/app/shared/service/client.service";

@Component({
  selector: "app-create-appointment",
  templateUrl: "create-appointment.component.html",
  styleUrls: ["create-appointment.component.css"],
})
export class CreateAppointmentComponent implements OnInit {
  public appointmentForm!: FormGroup;
  newArrayTime!: any;
  horarios!: any;
  clientList!: any;

  constructor(private fb: FormBuilder, public rest: AgendaService, public clientService: ClientService, public newRest: AppointmentService) {}

  ngOnInit(): void {
    this.getAgenda();

    this.getClient();

    this.appointmentForm = this.fb.group({
      CPF: ["", [Validators.required]],
      Data: [new Date().toISOString()],
      Hora: [, [Validators.required]],
      Descricao: ["", [Validators.required]],
    });
  }

  getAgenda() {
    this.rest.getAgenda().subscribe((data) => {
      const inventory = data;

      function isChecked(item: any) {
        return item.horarioMarcado === 0;
      }

      let buscarPor = inventory.filter(isChecked);

      this.newArrayTime = buscarPor;
    });
  }

  getClient() {
    this.clientService.getClients().subscribe((data) => {
      this.clientList = data;
      console.log(data);
    })
  }

  newAppointment() {
    this.newRest.postNewAppointment(this.appointmentForm.value).subscribe(result => {})
    window.location.reload();
  }
}
