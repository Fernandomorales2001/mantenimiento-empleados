import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleados';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  empleado: Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    salario: 0,
    codigoempleado: 0,
    empresa: '',
    antiguedad: '',
    image: ''
  };

  edit: boolean = false;

  constructor(private empleadosService: EmpleadosService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.empleadosService.getEmpleado(params.id)
      .subscribe(
        (res:Empleado) => { 
          this.empleado = res;
          this.empleado.id = parseInt(params.id);
          this.edit = true;
        },
        err => console.error(err)
      )
    }


  }

    saveNewEmpleado(){
       delete this.empleado.id;

       this.empleadosService.guardarEmpleado(this.empleado)
     .subscribe( 
       res => {
       console.log(res);
       this.router.navigate(['/empleados']);
     },
         err => console.error(err))
       
    }

    
    updateEmpleado(){
      // let body = {
      //   idempleado: this.empleado.id,
      //   nombre: this.empleado.nombre, 
      //   apellido: this.empleado.apellido, 
      //   direccion: this.empleado.direccion, 
      //   salario: this.empleado.salario, 
      //   codigoempleado: this.empleado.codigoempleado, 
      //   empresa: this.empleado.empresa,
      //   antiguedad: this.empleado.antiguedad,
      //   image: this.empleado.direccion
      // }
      console.log(this.empleado)
      this.empleadosService.actualizarEmpleado(this.empleado)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/empleados']);
        },
        err => console.log(err)
      )
    }
}
