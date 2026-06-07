import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  imports: [RouterLink],
  templateUrl: './proveedores.html'
})
export class Proveedores {
  // Estos datos viven en el .ts y se muestran en el .html (databinding)
  proveedores = [
    { id: 1, empresa: 'Distribuciones SA', producto: 'Papelería', telefono: '600111222' },
    { id: 2, empresa: 'TecnoImport', producto: 'Electrónica', telefono: '600333444' },
    { id: 3, empresa: 'Alimentos del Sur', producto: 'Comida', telefono: '600555666' }
  ];
}
