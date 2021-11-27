import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment } from "../model/appointment.model";

@Injectable({
  providedIn: "root",
})
export class AppointmentService {
  apiUrl = "https://localhost:5001/ecommerceapi/servicos/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getAppointmentList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + "listar")
  }


  public postNewAppointment(form: Appointment): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + "cadastrar", form)
  }


  public deleteAppointment(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiUrl + "deletar/" + id, id)
  }
}
