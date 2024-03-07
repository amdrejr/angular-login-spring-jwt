import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.css'
})
export class TextButtonComponent {
  @Input({required: true})
  content: string = '';
}
