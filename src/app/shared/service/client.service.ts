import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../model/client.model";

@Injectable({
  providedIn: "root",
})
export class ClientService {

  apiUrl = "https://localhost:5001/ecommerceapi/cliente/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  postNewClient(form: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.apiUrl + 'cadastrar', form);
  }

  getClients(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl + 'listar')
  }
}
