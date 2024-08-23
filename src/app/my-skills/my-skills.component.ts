import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills: { imgSrc: string, description: string }[] = [
    { imgSrc: 'assets/img/mySkills_img/Angular.png', description: 'Angular' },
    { imgSrc: 'assets/img/mySkills_img/TypeScript.png', description: 'TypeScript' },
    { imgSrc: 'assets/img/mySkills_img/Javascript.png', description: 'JavaScript' },
    { imgSrc: 'assets/img/mySkills_img/html.png', description: 'HTML' },
    { imgSrc: 'assets/img/mySkills_img/CSS.png', description: 'CSS' },
    { imgSrc: 'assets/img/mySkills_img/Firebase.png', description: 'Firebase' },
    { imgSrc: 'assets/img/mySkills_img/git.png', description: 'Git' },
    { imgSrc: 'assets/img/mySkills_img/scrum.png', description: 'Scrum' },
    { imgSrc: 'assets/img/mySkills_img/Api.png', description: 'Rest-Api' },
    { imgSrc: 'assets/img/mySkills_img/MaterialDesign.png', description: 'Material Design' },
  ];
}
