import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { CrearCitasComponent } from './crear-citas/crear-citas.component';

@NgModule({
  declarations: [VerCitasComponent, CrearCitasComponent],
  exports: [VerCitasComponent, CrearCitasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class CitasModule { }
