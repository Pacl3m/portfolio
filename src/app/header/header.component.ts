import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  toggleDropdownMenu() {
    this.firstLoad = false;
    this.toggleAnimation = !this.toggleAnimation;
    this.dropdownMenuActive = !this.dropdownMenuActive;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    let dropdownMenu = document.querySelector('.dropdownMenu');
    let headerWrapper = document.querySelector('.headerWrapper');
    let quickLinks = document.querySelectorAll('.quickLinksA');
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
}
