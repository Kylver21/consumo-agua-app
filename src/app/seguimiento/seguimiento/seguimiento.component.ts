import { Component } from '@angular/core';
import { ConsumoAguaService } from '../../servicios/consumo-agua.service';

@Component({
  selector: 'app-seguimiento',
  standalone: false,
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent {
  cantidad: number | null = null;

  constructor(private consumoService: ConsumoAguaService) { }

  registrar() {
    if (this.cantidad !== null && this.cantidad > 0) {
      this.consumoService.registrarConsumo(this.cantidad);
      this.cantidad = null;
    }
  }

  get meta() {
    return this.consumoService.getMetaDiaria();
    this.consumoService.getTipoMeta();
  }

  get tipoMeta() {
    // Puedes guardar el tipo de meta en el servicio si lo deseas, aquí lo obtengo del localStorage por simplicidad
    return localStorage.getItem('tipoMeta') || 'diaria';
  }

  get acumulado() {
    const consumos = this.consumoService.getConsumos();
    if (this.tipoMeta === 'diaria') {
      const hoy = new Date().toISOString().slice(0, 10);
      return consumos.filter(c => c.fecha === hoy).reduce((sum, c) => sum + c.cantidad, 0);
    } else {
      // Semanal: suma desde el lunes de esta semana hasta hoy
      const now = new Date();
      const firstDayOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1)); // Lunes
      firstDayOfWeek.setHours(0, 0, 0, 0);
      return consumos
        .filter(c => new Date(c.fecha) >= firstDayOfWeek)
        .reduce((sum, c) => sum + c.cantidad, 0);
    }
  }

  get restante() {
    return Math.max(this.meta - this.acumulado, 0);
  }
}