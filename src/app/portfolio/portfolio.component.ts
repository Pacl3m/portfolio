import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      imgSrc: '/assets/img/portfolio_img/sharkie_portolio.jpg',
      name: 'Sharkie',
      skills: 'HTML | CSS | JS',
      description: 'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
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
      description: 'Aufgabenmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
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
      description: 'AChat-Messenger im Stil von Slack, Nutzer können sich per Mail oder Google registrieren. In themenbasierten Channels ist der Austausch durch Nachrichten, Bilder oder Reaktionen möglich.',
      links: {
        live: 'https://www.test.de',
        github: 'https://www.test.de'
      },
      mirrored: false,
    },
  ];
}
