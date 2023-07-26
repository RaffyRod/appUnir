import { Component, OnInit } from '@angular/core';
import {PersistenciaService} from './../../services/persistencia.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss'],
})
export class VerCitasComponent  implements OnInit {

  cita:any;
  isModalOpen:any = false;

  public citas = this.persistencia.citas;

  constructor(private persistencia:PersistenciaService) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  verCita(cita:any){
    this.cita = cita;
    let fechaInicio = new Date(this.cita.fechaInicio);
    let fechaFin = new Date(this.cita.fechaFin);
    this.cita.fechaInicio = fechaInicio.toLocaleString();
    this.cita.fechaFin = fechaFin.toLocaleString();
    this.setOpen(true);
  }

}
