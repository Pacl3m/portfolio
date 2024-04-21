import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleAnimation: boolean | undefined;
  firstLoad: boolean = true;
  dropdownMenuActive: boolean = false;

  toggleMenuImageAnimation() {
    this.firstLoad = false;
    this.toggleAnimation = !this.toggleAnimation;
    this.dropdownMenuActive = !this.dropdownMenuActive;
  }

}
