import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  hover: boolean = false;
  focus: boolean = false;
  noName: boolean = false;
  noMessage: boolean = false;
  noEmail: boolean = false;

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    if (inputElement.value) {
      parentNode.classList.add('hover');

    } else if (!this.hover) {
      parentNode.classList.remove('hover');
    }
  }

  onHover(event: MouseEvent): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    parentNode.classList.add('hover');
    this.hover = true;
  }

  onHoverOut(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

    parentNode.classList.remove('hover');
    this.hover = false;
  }

  onFocus(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    parentNode.classList.add('focus');
    parentNode.classList.add('hover2');
    this.focus = true;
  }

  onBlur(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;;

    if (this.shouldRemoveClasses(inputElement, this.name, this.email, this.message)) {
      parentNode.classList.remove('focus');
      parentNode.classList.remove('hover');
      parentNode.classList.remove('hover2');
      this.focus = false;
      this.hover = false;
    }

    if (!(this.shouldRemoveClasses(inputElement, this.name, this.email, this.message))) {
      parentNode.classList.add('hover2');
      parentNode.classList.remove('hover');
    }
  }

  shouldRemoveClasses(inputElement: any, name: string, email: string, message: string): boolean {
    return (
      (inputElement.type === 'text' && !name) ||
      (inputElement.type === 'email' && !email) ||
      (inputElement.tagName === 'TEXTAREA' && !message)
    )
  }

  checkBox() {
    let rememberMeImg: any = document.getElementById('checkBox');

    if (rememberMeImg.classList.contains('uncheckBox')) {
      rememberMeImg.classList.remove('uncheckBox');
      rememberMeImg.classList.add('checkBox');
    } else {
      rememberMeImg.classList.add('uncheckBox');
      rememberMeImg.classList.remove('checkBox');
    }
  }

  test() {
    this.noName = !this.noName;
  }
}
