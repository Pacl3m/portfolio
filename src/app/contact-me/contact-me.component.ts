import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  hover: boolean = false;

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    if (inputElement.value) {
      parentNode.classList.add('hover');
      console.log(this.name);

    } else if (!this.hover) {
      parentNode.classList.remove('hover');
      console.log('NOOOO');
    }
  }

  onHover(event: MouseEvent): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    parentNode.classList.add('hover');
    // console.log('GEEEE');
    this.hover = true;
  }

  onHoverOut(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    if ((inputElement.type === 'text' && !this.name) ||
      (inputElement.type === 'email' && !this.email) ||
      (inputElement.tagName === 'TEXTAREA' && !this.message)) {
      parentNode.classList.remove('hover');
    }

  }
}
