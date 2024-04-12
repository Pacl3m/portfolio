import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
  @Input() direction: 'left' | 'right' = 'left';
}
