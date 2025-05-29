import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule
import { ConsumoAguaService } from '../../services/consumo-agua.service';

@Component({
  selector: 'app-formulario-meta',
  templateUrl: './formulario-meta.component.html',
  styleUrl: './formulario-meta.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule] // <-- Agrega CommonModule aquí
})
export class FormularioMetaComponent {
  metaLitros: number = 0;
  mensaje: string = '';

  constructor(private consumoAguaService: ConsumoAguaService) {}

  guardarMeta() {
    this.consumoAguaService.setMeta(this.metaLitros);
    this.mensaje = `Meta diaria de ${this.metaLitros} litros guardada correctamente.`;
  }
}