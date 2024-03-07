import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    MatIconModule,
    FormsModule
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input({required: true})
  type:"text" | "email" | "password" | "username" = 'text';
  @Input()
  label: string = '';
  @Output()
  valueOnChange = new EventEmitter<string>();
  value: string = '';

  // string aleatória alfanumérica que começa com um dígito e contém caracteres alfanuméricos.
  // Garante que componentes não possuam um mesmo id
  componentId = Math.random().toString(36).substring(2);
}
