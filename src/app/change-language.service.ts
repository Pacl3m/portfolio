import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  isEnglish: boolean = true;
  private languageChangedSource = new Subject<boolean>();
  languageChanged$ = this.languageChangedSource.asObservable();

  constructor() { }

  changeLanguage() {
    this.isEnglish = !this.isEnglish;
    this.languageChangedSource.next(this.isEnglish);
  }
}
