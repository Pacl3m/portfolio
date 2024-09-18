import { Component, ElementRef, HostListener } from '@angular/core';
import { ChangeLanguageService } from '../change-language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  isVisible: boolean = false;

  constructor(public languageService: ChangeLanguageService, private elementRef: ElementRef) {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elementPosition = this.elementRef.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      this.isVisible = true;
    }
  }
}
