import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-output-form',
  templateUrl: './input-output-form.component.html',
  styleUrl: './input-output-form.component.css'
})
export class InputOutputFormComponent {
  // Utilizar @Input para recibir datos iniciales
  @Input() initialData: string = '';

  // Utilizar @Output para enviar los datos modificados
  @Output() dataChanged: EventEmitter<string> = new EventEmitter<string>();

  // Propiedad para almacenar los datos del formulario
  formData: string = '';

  // Método que se ejecuta al modificar los datos en el formulario
  onFormChange() {
    // Emitir los datos modificados usando @Output
    this.dataChanged.emit(this.formData);
  }
}
