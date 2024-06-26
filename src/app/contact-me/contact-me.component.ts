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
  notAccept: boolean = true;

  // Eingabefunktion, um den Hover-Effekt hinzuzufügen oder zu entfernen
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

    // Hinzufügen oder Entfernen des Hover-Effekts basierend auf dem Eingabewert
    if (inputElement.value) {
      parentNode.classList.add('hover');
    } else if (!this.hover) {
      parentNode.classList.remove('hover');
    }

    // // Validierungen basierend auf dem Eingabetyp
    // if (inputElement.type === 'text') {
    //   this.validateName(inputElement.value);
    // } else if (inputElement.type === 'email') {
    //   this.validateEmail(inputElement.value);
    // } else if (inputElement.tagName === 'TEXTAREA') {
    //   this.validateMessage(inputElement.value);
    // }
  }

  // Funktion, um den Hover-Effekt bei Mausbewegung hinzuzufügen
  onHover(event: MouseEvent): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

    parentNode.classList.add('hover');
    this.hover = true;
  }

  // Funktion, um den Hover-Effekt bei Verlassen der Maus zu entfernen
  onHoverOut(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

    parentNode.classList.remove('hover');
    this.hover = false;
  }

  // Funktion, um den Fokus-Effekt hinzuzufügen
  onFocus(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

    parentNode.classList.add('focus');
    parentNode.classList.add('hover2');
    this.focus = true;
  }

  // Funktion, um den Fokus-Effekt zu entfernen
  onBlur(event: Event): void {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    const parentNode = inputElement.parentNode as HTMLElement;

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

    // Validierungen basierend auf dem Eingabetyp
    if (inputElement.type === 'text') {
      this.validateName(inputElement.value);
    } else if (inputElement.type === 'email') {
      this.validateEmail(inputElement.value);
    } else if (inputElement.tagName === 'TEXTAREA') {
      this.validateMessage(inputElement.value);
    }
  }

  // Prüft, ob die Klassen entfernt werden sollen
  shouldRemoveClasses(inputElement: any, name: string, email: string, message: string): boolean {
    return (
      (inputElement.type === 'text' && !name) ||
      (inputElement.type === 'email' && !email) ||
      (inputElement.tagName === 'TEXTAREA' && !message)
    );
  }

  // Funktion zum Umschalten des Kontrollkästchens
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

  // Testfunktion zum Umschalten der Fehlermeldung
  test() {
    this.notAccept = !this.notAccept;
  }

  // Validierung des Namensfeldes
  validateName(name: string): void {
    if (name.length >= 2 || name.length == 0) {
      this.noName = false;
    } else {
      this.noName = true;
    }
  }

  // Validierung des Email-Feldes
  validateEmail(email: string): void {
    if (email.includes('@') || email.length == 0) {
      this.noEmail = false;
    } else {
      this.noEmail = true;
    }
  }

  // Validierung des Nachrichtenfeldes
  validateMessage(message: string): void {
    const words = message.trim().split(/\s+/);
    if (words.length >= 3 || message.trim() === '') {
      this.noMessage = false;
    } else {
      this.noMessage = true;
    }
  }

  hasMinWords(text: string, minWords: number): boolean {
    return text.trim().split(/\s+/).length >= minWords;
  }

  hasAt(email: string): boolean {
    return email.includes('@')
  }
}
