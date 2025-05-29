import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoAguaService {
  private metaLitros: number = 0;
  private consumos: { fecha: Date, cantidad: number }[] = [];

  setMeta(litros: number) {
    this.metaLitros = litros;
  }

  getMeta(): number {
    return this.metaLitros;
  }

  agregarConsumo(cantidad: number) {
    this.consumos.push({ fecha: new Date(), cantidad });
  }

  getConsumos() {
    return this.consumos;
  }

  getTotalConsumido(): number {
    return this.consumos.reduce((total, c) => total + c.cantidad, 0);
  }
}