import { Injectable } from '@angular/core';
import { Modelo } from '../interfaces/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  listModelos: Modelo[] = [
    {marca: "mazda", modelo: "mazda3", precio:"10.000", fecha:"2022"},
    {marca: "chevrolet", modelo: "sail", precio:"10.000", fecha:"2022"},
    {marca: "jac", modelo: "s4", precio:"10.000", fecha:"2022"},
    {marca: "toyota", modelo: "f150", precio:"10.000", fecha:"2022"},
    {marca: "mazda", modelo: "mazda2", precio:"10.000", fecha:"2022"},
    {marca: "chevy", modelo: "tigo2", precio:"10.000", fecha:"2022"}
    
  ];

  constructor() { }

  getModelos(){
    return this.listModelos.slice();
  }

  eliminarModelo(index:number){
    this.listModelos.splice(index,1);
  }

  agregarModelo(modelo:Modelo){
    this.listModelos.unshift(modelo);
  }

}
