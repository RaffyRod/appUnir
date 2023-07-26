import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersistenciaService {

  private _storage: Storage | null = null;


  private static _citas: any = new BehaviorSubject([]);

  public get citas() {
    return PersistenciaService._citas;
  }

  public set citas(value: any) {
    PersistenciaService._citas.next(value);
  }

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    const storage = await this.storage.create();
    this._storage = storage;
    const citas = await this.storage.get('citas');
    const citasArr = JSON.parse(citas ?? '[]');
    this.citas = citasArr;
  }

  async crearCita(cita:any){
    const citas = await this.storage.get('citas');
    const citasArr = JSON.parse(citas ?? '[]');
    this.citas = [...citasArr, cita];
    await this.storage.set('citas', JSON.stringify(this.citas.getValue()));
  }

}
