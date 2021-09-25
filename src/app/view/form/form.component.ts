import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const DATA = [{
  nome: "Júlia",
  CPF: 11702077900,
  phone: 991397981,
  petName: "Magoo",
  especie: "Cachorro",
  age: 1,
  porte: "Grande"
}]


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataSource = DATA;

  @Input('a')
  clientName!: string;

  constructor() { 
  

  }

  ngOnInit(): void {
   
  }

}
