import { Component, HostListener, Renderer2, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent {

  toggleAnimation: boolean | undefined;
  firstLoad: boolean = true;
  dropdownMenuActive: boolean = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

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
    let isClickInsideDropdown = dropdownMenu?.contains(event.target as Node);
    let isClickInsideHeaderWrapper = headerWrapper?.contains(event.target as Node);
    let isClickInsideQuickLinks = false;

    quickLinks.forEach(element => {
      if (element.contains(event.target as Node)) {
        isClickInsideQuickLinks = true;
        return;
      }
    });

    if ((!isClickInsideDropdown && !isClickInsideHeaderWrapper) || isClickInsideQuickLinks) {
      this.dropdownMenuActive = false;
      this.toggleAnimation = false;
    }
  }

  private setupSmoothScroll() {
    const headerHeight = this.document.querySelector('.headerWrapper')?.clientHeight || 0;
    const links = this.document.querySelectorAll('.quickLinksA');
    const offset = 100; // The offset value to stop before the target

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
}
