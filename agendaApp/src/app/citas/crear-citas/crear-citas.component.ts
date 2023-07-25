import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PersistenciaService} from './../../services/persistencia.service';
import { Router } from '@angular/router';

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
    private persistencia: PersistenciaService,
    private router: Router
  ) { }

  ngOnInit() {}

  submitForm() {
    const formData = this.eventoForm.value;
    this.crearCita(formData).then((result) => {
      this.router.navigate(['tabs/tab2']);
    })

  }

  async crearCita(cita:any){
    await this.persistencia.crearCita(cita);
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
