import { Component } from '@angular/core';
import { ConsumoAguaService } from '../../servicios/consumo-agua.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento',
  standalone: false,
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent {
  cantidad: number | null = null;

  constructor(
    private consumoService: ConsumoAguaService,
    private router: Router
  ) { }

  registrar() {
    if (this.cantidad !== null && this.cantidad > 0) {
      this.consumoService.registrarConsumo(this.cantidad);

      // Solo redirige la primera vez
      if (!localStorage.getItem('primerConsumo')) {
        localStorage.setItem('primerConsumo', 'true');
        this.router.navigate(['/tabla-resumen']);
      }

      this.cantidad = null;
    }
  }

  get meta() {
    return this.consumoService.getMetaDiaria();
    this.consumoService.getTipoMeta();
  }

  get tipoMeta() {
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