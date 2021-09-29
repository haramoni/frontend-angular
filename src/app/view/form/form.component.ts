import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ClientService } from "src/app/shared/service/client.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private fb: FormBuilder, private rest: ClientService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      NomeTutor: ["", [Validators.required]],
      CPF: ["", [Validators.required]],
      Telefone: ["", [Validators.required]],
      NomePet: ["", [Validators.required]],
      Especie: ["", [Validators.required]],
      Idade: ["", [Validators.required]],
      Porte: ["", [Validators.required]],
    });
  }

  createLive() {
    console.log(this.userForm.value);
    this.rest.postNewClient(this.userForm.value).subscribe((result) => {
    });
    // this.userForm.reset();
    // window.location.reload();
  }
}
