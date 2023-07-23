import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {


  private citas: any = [];
  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    const storage = await this.storage.create();
    const citas = await storage.get('citas');
    this.citas = citas || [];
  }

  getCitas(){
    return this.citas;
  }

  crearCita(cita:any){
    this.citas.push(cita);
    this.storage.set('citas',this.citas);
  }
}
