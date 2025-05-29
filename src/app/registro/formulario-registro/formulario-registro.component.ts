import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsumoAguaService } from '../../services/consumo-agua.service';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  cantidad: number = 0;
  unidad: string = 'ml';
  mensaje: string = '';

  constructor(private consumoService: ConsumoAguaService) {}

  registrarConsumo() {
    let cantidadLitros = this.unidad === 'ml' ? this.cantidad / 1000 : this.cantidad;
    this.consumoService.agregarConsumo(cantidadLitros);
    this.mensaje = `Consumo de ${this.cantidad} ${this.unidad} registrado correctamente.`;
    this.cantidad = 0;
    this.unidad = 'ml';
  }
}