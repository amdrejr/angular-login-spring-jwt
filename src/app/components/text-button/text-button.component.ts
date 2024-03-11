import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.css'
})
export class TextButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  // Método chamado quando o botão é clicado
  emitEvent(): void {
    // Emite o evento 'clicked' para notificar o componente pai
    console.log("Button clicked!")
    this.onClick.emit();
  }
}
