import { Component, OnInit } from '@angular/core';
import {PersistenciaService} from './../../services/persistencia.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss'],
})
export class VerCitasComponent  implements OnInit {

  citas:any = [];
  constructor(private persistencia:PersistenciaService) { }

  ngOnInit() {
    this.verCitas();
  }

  verCitas(){
    this.citas = this.persistencia.getCitas();
    return this.citas;
  }

}
