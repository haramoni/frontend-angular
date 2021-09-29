import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agenda } from "../model/agenda.model";

@Injectable({
  providedIn: "root",
})
export class AgendaService {

  apiUrl = "https://localhost:5001/ecommerceapi/agenda/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  postAgenda(): Observable<Agenda> {
    return this.httpClient.post<any>(this.apiUrl + 'iniciar', '');
  }

  getAgenda(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + "listarHorarioDisponivel")
  }
}
