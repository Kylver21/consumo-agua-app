import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAguaService {
  private metaDiaria = 0; // litros
  private consumos: { fecha: string, hora: string, cantidad: number }[] = [];
  private tipoMeta: 'diaria' | 'semanal' = 'diaria';

  setMetaDiaria(litros: number) {
    this.metaDiaria = litros;
  }

  getMetaDiaria() {
    return this.metaDiaria;
  }
  setTipoMeta(tipo: 'diaria' | 'semanal') {
    this.tipoMeta = tipo;
    localStorage.setItem('tipoMeta', tipo);
  }
  getTipoMeta() {
    return localStorage.getItem('tipoMeta') as 'diaria' | 'semanal' || this.tipoMeta;
  }

  registrarConsumo(cantidad: number) {
    const now = new Date();
    const fecha = now.toISOString().slice(0, 10);
    const hora = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.consumos.push({ fecha, hora, cantidad }); // cantidad en litros
  }

  getConsumos() {
    return this.consumos;
  }
}