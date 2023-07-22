import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {
 
  private _storage: Storage | null = null;


  private citas: any = [];
  constructor(private ionicStorage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.ionicStorage.create();
    this._storage = storage;
  }

  getCitas(){
    return this.citas;
  }

  crearCita(cita:any){
    this.citas.push(cita);
  }
}
