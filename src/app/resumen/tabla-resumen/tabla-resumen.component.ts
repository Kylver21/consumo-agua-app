import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoAguaService } from '../../services/consumo-agua.service';

@Component({
  selector: 'app-tabla-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-resumen.component.html',
  styleUrl: './tabla-resumen.component.css'
})
export class TablaResumenComponent {
  meta: number = 0;
  consumos: { fecha: Date, cantidad: number }[] = [];
  total: number = 0;

  constructor(private consumoService: ConsumoAguaService) {}

  ngOnInit() {
    this.meta = this.consumoService.getMeta();
    this.consumos = this.consumoService.getConsumos();
    this.total = this.consumoService.getTotalConsumido();
  }
}