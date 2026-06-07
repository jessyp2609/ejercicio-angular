import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleados',
  imports: [RouterLink],
  templateUrl: './empleados.html'
})
export class Empleados {
  // Estos datos viven en el .ts y se muestran en el .html (databinding)
  empleados = [
    { id: 1, nombre: 'Carlos Díaz', puesto: 'Vendedor', salario: 1500 },
    { id: 2, nombre: 'Laura Pérez', puesto: 'Contadora', salario: 2000 },
    { id: 3, nombre: 'Jorge Mena', puesto: 'Gerente', salario: 3000 }
  ];

  // Guarda el empleado seleccionado; empieza vacío (null)
  seleccionado: any = null;

  // Acción del botón "Ver": guarda el empleado en el que se hizo clic
  verDetalle(empleado: any) {
    this.seleccionado = empleado;
  }
}
