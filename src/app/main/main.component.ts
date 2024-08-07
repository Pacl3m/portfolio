import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeadlineComponent } from '../headline/headline.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ArrowComponent } from '../arrow/arrow.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HeadlineComponent,
    AboutMeComponent,
    ArrowComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactMeComponent,
    FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
