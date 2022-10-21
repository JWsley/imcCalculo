import { Injectable } from '@angular/core';

import { imc } from '../models/imc.model';

import { Guid } from 'guid-typescript'

import { Storage } from '@ionic/storage-angular'



@Injectable({
  providedIn: 'root'
})
export class IMCService {

  constructor(private storage:Storage) { }
  insert(argumento:imc ){
    console.log(argumento)
    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }
}
