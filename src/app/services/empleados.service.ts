import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.API_URI}/empleados`)
  }

  getEmpleado(idempleado: string){
    return this.http.get(`${this.API_URI}/empleados/${idempleado}`)
  }

  deleteEmpleado(idempleado: string){
    return this.http.delete(`${this.API_URI}/empleados/${idempleado}`)
  }

  guardarEmpleado(empleado: Empleado){
    return this.http.post(`${this.API_URI}/empleados`, empleado)
  }

  actualizarEmpleado(empleado: Empleado){
    console.log(empleado)
    return this.http.put(`${this.API_URI}/empleados/${empleado.id}`, empleado)
  }
}
