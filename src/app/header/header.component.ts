import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
    let isClickInsideDropdown = dropdownMenu?.contains(event.target as Node);
    let isClickInsideHeaderWrapper = headerWrapper?.contains(event.target as Node);
    if (!isClickInsideDropdown && !isClickInsideHeaderWrapper) {
      this.toggleDropdownMenu();
    }
  }

}
