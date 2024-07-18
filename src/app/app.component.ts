import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MaterialImports } from './/material.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MaterialImports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ivonne';
  languages = [
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
  ]
  tools = [
    {name: 'Github', icon: 'github'},
    {name: 'Gitlab', icon: 'gitlab'},
    {name: 'Docker', icon: 'docker'},
    {name: 'BootStrap', icon: 'bootstrap'},
    {name: 'Material Design', icon: 'none'},
  ]
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.registerIcons();
  }
  registerIcons(): void {
    this.languages.map(language => {
      this.matIconRegistry.addSvgIcon(
        language.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${language.icon}.svg`)
      )
    });
    this.tools.map(tool => {
      this.matIconRegistry.addSvgIcon(
        tool.icon,
        this.domSanitzer.bypassSecurityTrustResourceUrl(`assets/icons/${tool.icon}.svg`)
      )
    });
  }
}
