import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLanguageService } from '../change-language.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent implements OnInit {

  projects: any[] = [];
  public languageSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.setProjects();

    this.languageSubscription = this.languageService.languageChanged$.subscribe(() => {
      this.setProjects();
    });
  }

  setProjects(): void {
    this.projects = [
      {
        imgSrc: '/assets/img/portfolio_img/sharkie_portolio.jpg',
        name: 'Sharkie',
        skills: 'HTML | CSS | JS',
        description: this.languageService.isEnglish ?
          'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.' :
          'A simple jump-and-run game based on an object-oriented approach. Help Sharkie find coins and poison bottles to fight the killer whale.',
        links: {
          live: 'https://pascal-moeller.developerakademie.net/Sharkie/index.html',
          github: 'https://github.com/Pacl3m/Sharkie'
        },
        mirrored: false,
      },
      {
        imgSrc: '/assets/img/portfolio_img/myJoinPortfolio.jpg',
        name: 'Join',
        skills: 'HTML | CSS | JS | API',
        description: this.languageService.isEnglish ?
          'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.' :
          'Task manager inspired by the Kanban system. Create and organise tasks using drag-and-drop functions, assign users and categories.',
        links: {
          live: 'https://pascal-moeller.developerakademie.net/myJoin/index.html',
          github: 'https://github.com/Pacl3m/myJoin'
        },
        mirrored: true,
      },
      {
        imgSrc: '/assets/img/portfolio_img/myDABubblePortfolio.jpg',
        name: 'DABubble',
        skills: 'Angular | TypeScript | Firebase',
        description: this.languageService.isEnglish ?
          'Ein Chat-Messenger im Stil von Slack, Nutzer können sich per Mail oder Google registrieren. In themenbasierten Channels ist der Austausch durch Nachrichten, Bilder oder Reaktionen möglich.' :
          'A chat messenger in the style of Slack, users can register via email or Google. Messages, images or reactions can be exchanged in topic-based channels.',
        links: {
          live: 'https://www.test.de',
          github: 'https://www.test.de'
        },
        mirrored: false,
      },
    ];
  }



  constructor(public languageService: ChangeLanguageService) {

  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

