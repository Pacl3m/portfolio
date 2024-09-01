import { Component, HostListener, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ChangeLanguageService } from '../change-language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {

  toggleAnimation: boolean | undefined;
  firstLoad: boolean = true;
  dropdownMenuActive: boolean = false;
  setEng: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    public languageService: ChangeLanguageService) { }

  ngOnInit() {
    this.setupSmoothScroll();
  }

  toggleDropdownMenu() {
    this.firstLoad = false;
    this.toggleAnimation = !this.toggleAnimation;
    this.dropdownMenuActive = !this.dropdownMenuActive;
  }

  @HostListener('document:click', ['$event'])

  onClickOutside(event: MouseEvent) {
    let dropdownMenu = this.document.querySelector('.dropdownMenu');
    let headerWrapper = this.document.querySelector('.headerWrapper');
    let quickLinks = this.document.querySelectorAll('.quickLinksA');
    let contactMe = this.document.querySelectorAll('.contactMe');
    let isClickInsideDropdown = dropdownMenu?.contains(event.target as Node);
    let isClickInsideHeaderWrapper = headerWrapper?.contains(event.target as Node);
    let isClickInsideQuickLinks = false;
    let isClickedSayHi = headerWrapper?.contains(event.target as Node);

    quickLinks.forEach(element => {
      if (element.contains(event.target as Node)) {
        isClickInsideQuickLinks = true;
        return;
      }
    });

    if ((!isClickInsideDropdown && !isClickInsideHeaderWrapper) || isClickInsideQuickLinks || !isClickedSayHi) {
      this.dropdownMenuActive = false;
      this.toggleAnimation = false;
    }
  }

  private setupSmoothScroll() {
    const headerHeight = this.document.querySelector('.headerWrapper')?.clientHeight || 0;
    const links = this.document.querySelectorAll('.quickLinksA');
    const offset = 120; // The offset value to stop before the target

    links.forEach(link => {
      this.renderer.listen(link, 'click', (event) => {
        event.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = this.document.getElementById(targetId || '');

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  reloadPage() {
    window.location.reload();
  }

  navigateToFragment(fragment: string) {
    let yOffset;
    this.router.navigate(['']).then(() => {
      setTimeout(() => {
        this.router.navigate([], { fragment }).then(() => {
          const element = document.getElementById(fragment);
          if (element) {
            if (innerHeight <= 500) {
              yOffset = -130;
            } else if (innerHeight <= 700) {
              yOffset = -150;
            } else if (innerHeight <= 1050) {
              yOffset = -170;
            } else {
              yOffset = -250;
            }
            // Adjust offset accordingly
            console.log(yOffset);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      }, 100);
    });
  }

  toogleLanguage() {
    debugger
    // this.languageService.changeLanguage(!this.languageService.setEng$);
  }
}
