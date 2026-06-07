import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [RouterLink],
  templateUrl: './clientes.html'
})
export class Clientes {
  // Estos datos viven en el .ts y se muestran en el .html (databinding)
  clientes = [
    { id: 1, nombre: 'Ana Torres', correo: 'ana@correo.com', ciudad: 'Madrid' },
    { id: 2, nombre: 'Luis Gómez', correo: 'luis@correo.com', ciudad: 'Sevilla' },
    { id: 3, nombre: 'María Ruiz', correo: 'maria@correo.com', ciudad: 'Valencia' }
  ];

  // Guarda el cliente seleccionado; empieza vacío (null)
  seleccionado: any = null;

  // Acción del botón "Ver": guarda el cliente en el que se hizo clic
  verDetalle(cliente: any) {
    this.seleccionado = cliente;
  }
}
