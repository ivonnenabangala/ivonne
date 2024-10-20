import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialImports } from './/material.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MaterialImports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ivonne';
  contacts: {name: string, icon:string} [] = [
    {name: 'Email', icon: 'gmail'},
    {name: 'LinkedIn', icon: 'linkedin'},
    {name: 'Github', icon: 'github'},
    {name: 'X', icon: 'x'},
  ]
  languages: { name: string, icon:string } []= [
    {name: 'JavaScript', icon: 'javascript'},
    {name: 'TypeScript', icon: 'typescript'},
    {name: 'Angular', icon: 'angular'},
    {name: 'Vue JS', icon: 'vue'},
    {name: 'HTML5', icon: 'html'},
    {name: 'Python', icon: 'python'},
    {name: 'CSS3', icon: 'css'},
    {name: 'Django', icon: 'django'},
    {name: 'Firebase', icon: 'firebase'},
    {name: 'Flutter', icon: 'flutter'},
    {name: 'SQLite', icon: 'sqlite'},
    {name: 'MySql', icon: 'mysql'},
    {name: 'PostgreSQL', icon: 'postgresql'},
  ]
  tools: { name: string, icon:string } [] = [
    {name: 'Github', icon: 'github'},
    {name: 'Gitlab', icon: 'gitlab'},
    {name: 'Docker', icon: 'docker'},
    {name: 'Google Cloud Platform', icon: 'gcp'},
    {name: 'BootStrap', icon: 'bootstrap'},
    {name: 'Material Design', icon: 'material-ui'},
  ]
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.registerIcons();
  }
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
}
