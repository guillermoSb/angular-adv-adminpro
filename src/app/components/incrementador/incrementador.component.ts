import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); 

  invalid: boolean = false;

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  /**
   * Cambiar el valor de la barra de progreso
   * @param valor Valor a sumar
   */
  cambiarValor(valor: number): void {
    this.invalid = false;
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      this.valorSalida.emit(this.progreso);
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit(this.progreso);
      return;
    }
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {
    if (nuevoValor > 100) {
      this.invalid = true;
      this.progreso = 100;
    } else if (nuevoValor < 0) {
      this.invalid = true;
      this.progreso = 0;
    } else {
      this.invalid = false;
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);

  }


}
