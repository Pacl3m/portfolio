import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeLanguageService } from '../change-language.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface EmailResponse {
  status: string;
  message: string;
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
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
  noEmail: boolean = false;
  noMessage: boolean = false;
  notAccept: boolean = true;
  isAccept: boolean = false;
  private apiUrl = 'https://www.pascal-moeller.de/media/send_mail.php';

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  constructor(public languageService: ChangeLanguageService, private router: Router, private http: HttpClient) {

  }

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
    this.toggleAccept();
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
  toggleAccept() {
    this.isAccept = !this.isAccept;
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  checkInput(): boolean {
    this.noName = this.name.length < 2;
    this.noEmail = !this.email.includes('@');
    const words = this.message.trim().split(/\s+/);
    this.noMessage = words.length < 3;
    if (this.noName) { setTimeout(() => this.noName = false, 2000); }
    if (this.noEmail) { setTimeout(() => this.noEmail = false, 2000); }
    if (this.noMessage) { setTimeout(() => this.noMessage = false, 2000); }
    if (!this.isAccept) { this.notAccept = false } { setTimeout(() => this.notAccept = true, 2000); };
    return !this.noName && !this.noEmail && !this.noMessage && this.notAccept;
  }

  setMessageData() {
    if (this.checkInput()) {
      this.contactData.name = this.name;
      this.contactData.email = this.email;
      this.contactData.message = this.message;
      this.sendEmail(this.contactData);
      this.resetContactMe();
      this.sendMessage();
    }
  }


  sendEmail(data: { name: string; email: string; message: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post<EmailResponse>(this.apiUrl, data, { headers })
      .subscribe({
        next: () => { },
        error: () => { },
      });
  }

  sendMessage() {
    let overlay = document.querySelectorAll('.overlay');
    let sendingConfirmation = document.querySelectorAll('.sendingConfirmation');

    overlay.forEach(e => { e.classList.add('d-flex') });
    sendingConfirmation.forEach(e => { e.classList.add('appear') });
    setTimeout(() => {
      overlay.forEach(e => { e.classList.remove('d-flex') });
      sendingConfirmation.forEach(e => { e.classList.remove('appear') });
    }, 2000);
  }

  resetContactMe() {
    this.name = "";
    this.email = "";
    this.message = "";
    this.removeFocusAndHoverClasses();
    this.checkBox();
  }

  removeFocusAndHoverClasses(): void {
    const elements = document.querySelectorAll('.focus, .hover, .hover2');

    elements.forEach(element => {
      element.classList.remove('focus', 'hover', 'hover2');
    });
    this.focus = false;
    this.hover = false;
  }

  onPrivacyPolicyClick(): void {
    this.router.navigate(['/imprint']);
  }
}
