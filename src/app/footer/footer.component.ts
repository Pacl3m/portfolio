import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangeLanguageService } from '../change-language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  reloadPage() {
    window.location.reload();
  }
  constructor(public languageService: ChangeLanguageService) {

  }
}
