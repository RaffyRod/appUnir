import { Component, OnInit } from '@angular/core';
import {PersistenciaService} from './../../services/persistencia.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss'],
})
export class VerCitasComponent  implements OnInit {

  cita:any;
  citas:any = [];
  isModalOpen:any = false;
  constructor(private persistencia:PersistenciaService) { }

  ngOnInit() {
    this.verCitas();
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

  async verCitas(){
    this.citas = await this.persistencia.getCitas();
    return this.citas;
  }

}
