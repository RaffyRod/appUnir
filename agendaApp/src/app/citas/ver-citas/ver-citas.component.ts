import { Component, OnInit } from '@angular/core';
import {PersistenciaService} from './../../services/persistencia.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.scss'],
})
export class VerCitasComponent  implements OnInit {

  constructor(private persistencia:PersistenciaService) { }

  ngOnInit() {
    console.log(this.verCitas())
  }

  verCitas(){
    let citas = this.persistencia.getCitas();
    return citas
  }

}
