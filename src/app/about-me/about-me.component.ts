import { Component } from '@angular/core';
import { ChangeLanguageService } from '../change-language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(public languageService: ChangeLanguageService) {

  }

}
