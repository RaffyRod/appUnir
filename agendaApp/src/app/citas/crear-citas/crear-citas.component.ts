import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PersistenciaService} from './../../services/persistencia.service';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.scss'],
})



export class CrearCitasComponent  implements OnInit {

  eventoForm: FormGroup = this.formBuilder.group({
    nombreEvento: ['', Validators.required],
    tipoEvento: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    todoElDia: [false],
    descripcion: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private persistencia: PersistenciaService
  ) { }

  ngOnInit() {}

  submitForm() {
    const formData = this.eventoForm.value;
    this.crearCita(formData);
  }

  crearCita(cita:any){
    this.persistencia.crearCita(cita);
  }

  getTipoCitas(){
    let tipos = [
      "Cita",
      "Aniversario",
      "Cuenta Atras"
    ]
    return tipos;
  }

}
