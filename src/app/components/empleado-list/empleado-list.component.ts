import { Component, HostBinding, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
    empleados: any = [];
  constructor(private empleadoService: EmpleadosService) { }
  @HostBinding('class') clases = 'row';
  
  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      },
      err => console.error(err)
    );
  }

  deleteEmpleado(id: string){
    this.empleadoService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.getEmpleados();
      },
      err => console.log(err)
    )
  }

  

}
