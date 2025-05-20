import { Component, Renderer2 } from '@angular/core';
import { ConsumoAguaService } from '../../servicios/consumo-agua.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  meta = 2;
  tipoMeta: 'diaria' | 'semanal' = 'diaria';
  metaGuardada = false;
  darkMode = false;

  constructor(private consumoService: ConsumoAguaService, private renderer: Renderer2) {
    const metaActual = this.consumoService.getMetaDiaria();
    if (metaActual > 0) {
      this.meta = metaActual;
      this.metaGuardada = true;
    }
    // Detecta modo oscuro guardado
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.setTheme();
  }

  guardarMeta() {
    if (this.metaGuardada) {
      if (!confirm('¿Seguro que deseas cambiar la meta? Esto afectará el seguimiento y el resumen.')) {
        return;
      }
    }
    this.consumoService.setMetaDiaria(this.meta);
    this.consumoService.setTipoMeta(this.tipoMeta);
    this.metaGuardada = true;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
    this.setTheme();
  }

  setTheme() {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
