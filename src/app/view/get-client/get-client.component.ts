import { Client } from './../../shared/model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: "app-get-client",
  templateUrl: "get-client.component.html",
  styleUrls: ["get-client.component.css"],
})
export class GetClientComponent implements OnInit {
  clientePrevious!: Client[];
  especie!: string;
  nomePet!: any;
  nomeTutor!: any;
  cpf: any;

  constructor(public clienteService: ClientService) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clienteService.getClients().subscribe((nomeTutor) => {
      this.clientePrevious = nomeTutor;

      nomeTutor.map((item: any, index: any) => {
        let manipulatedValues = item.data.split("T");
        let formattedData = manipulatedValues[0].split("-");
        this.nomeTutor = `${formattedData[2]}/${formattedData[1]}/${formattedData[0]}`;
      });
    });

  }
}
