import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {

  private _storage: Storage | null = null;


  private citas: any = [];
  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async crearCita(cita:any){
    this.citas = [];
    this.citas = await this.storage.get('citas');
    this.citas.push(cita);
    await this.storage.set('citas',this.citas)
  }

  async getCitas(){
    return  await this.storage.get('citas');
  }

}
