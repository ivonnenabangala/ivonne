import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MatTabsModule } from '@angular/material/tabs'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ivonne';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
    private bottomSheet: MatBottomSheet
  ) {
    this.registerIcons();
  }

  contacts: { name: string, icon: string }[] = [
    { name: 'Email', icon: 'gmail' },
    { name: 'LinkedIn', icon: 'linkedin' },
    { name: 'Github', icon: 'github' },
    { name: 'X', icon: 'x' },
  ]

  languages: { name: string, icon: string }[] = [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Vue JS', icon: 'vue' },
    { name: 'HTML5', icon: 'html' },
    { name: 'Python', icon: 'python' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Django', icon: 'django' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'NodeJS', icon: 'nodejs' },
  ]

  databases: { name: string, icon: string }[] = [
    { name: 'MySql', icon: 'mysql' },
    { name: 'Microsoft SQL Server', icon: 'sql-server' },
    { name: 'PostgreSQL', icon: 'postgresql' },
  ]

  tools: { name: string, icon: string }[] = [
    { name: 'Github', icon: 'github' },
    { name: 'Gitlab', icon: 'gitlab' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
    { name: 'BootStrap', icon: 'bootstrap' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Trello', icon: 'trello' },
  ]

  projects = [
    {
      title: 'Citizen Connect',
      description: 'Citizen Connect is a web application designed to bridge the gap between citizens and government authorities by providing a platform for reporting issues, tracking their resolution, and fostering community engagement through opinion polls and discussions. This web application integrates AI in summarizing information in published documents, and in summarizing the comments in a discussion.',
      repo: 'https://github.com/ivonnenabangala/citizen-connect',
      image: 'assets/images/connect-views.png',
      techStack: ['angular', 'nodejs', 'sql-server', 'cypress', 'aws', 'docker'],
      images: ['assets/images/connect-views.png', 'assets/images/connect-docs.png', 'assets/images/connect-bot.png']
    },
    {
      title: 'Nitext Web app',
      description: 'Contributed in maintaining this bulk SMS platform in my software development internship at Content Aggregation Limited',
      liveLink: 'https://bulk.nitext.co.ke',
      image: 'assets/images/nitext.png',
      techStack: []
    },
    {
      title: 'Viutravel Web App',
      description: 'Contributed in maintaining viutravel, a travel agency platform to manage bookings and destinations, in my software development internship at Content Aggregation Limited.',
      liveLink: 'https://viutravel.com',
      image: 'assets/images/viutravel.png',
      techStack: []
    },
    {
      title: 'St. Monica’s Girls High School',
      description: 'A responsive, and dynamic school website built using Angular and Firebase.',
      liveLink: 'https://stmonicasgirls.com',
      image: 'assets/images/smghs.png',
      techStack: ['angular', 'firebase']
    },
    {
      title: 'RideFix: In progress',
      description: 'Solving a distress problem for car owners during a car breakdown in a new town, RideFix majorly seeks to provide car owners with a list of garages close to them and request for a service or getting a mechanic from the garage. It integrates Google Maps service to triangulate garages close to the user or in a town of their choice. The application displays reviews of a garage to help car owners settle on a choice.',
      frontendRepo: 'https://github.com/ivonnenabangala/Ridefix-fe',
      backendRepo: 'https://github.com/ivonnenabangala/ridefix',
      image: 'assets/images/rideFix.png',
      techStack: ['angular', 'django', 'postgresql', 'aws', 'docker']
    }
  ];



  registerIcons(): void {
    this.contacts.map(item => {
      this.matIconRegistry.addSvgIcon(
        item.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`/assets/icons/${item.icon}.svg`)
      )
    });
    this.languages.map(item => {
      this.matIconRegistry.addSvgIcon(
        item.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`/assets/icons/${item.icon}.svg`)
      )
    });
    this.tools.map(item => {
      this.matIconRegistry.addSvgIcon(
        item.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${item.icon}.svg`)
      )
    });
  }

  openBottomSheet(project: any): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: project
    });
  }

}
