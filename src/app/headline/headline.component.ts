import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeLanguageService } from '../change-language.service';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {
  constructor(public languageService: ChangeLanguageService) {

  }
}
