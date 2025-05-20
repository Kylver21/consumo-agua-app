import { Component } from '@angular/core';
import { ConsumoAguaService } from '../../servicios/consumo-agua.service';


@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(public consumoService: ConsumoAguaService) { }

  get consumos() {
    return this.consumoService.getConsumos();
  }

  get meta() {
    return this.consumoService.getMetaDiaria();
  }

  // Estado acumulado por día
  getEstado(index: number): string {
    let acumulado = 0;
    const meta = this.meta;
    const consumos = this.consumos;
    const fecha = consumos[index].fecha;
    for (let i = 0; i <= index; i++) {
      if (consumos[i].fecha === fecha) {
        acumulado += consumos[i].cantidad;
      }
    }
    return acumulado >= meta ? 'Cumplido' : 'Pendiente';
  }

  getEstadoClase(index: number): string {
    return this.getEstado(index) === 'Cumplido' ? 'estado-cumplido' : 'estado-pendiente';
  }
}