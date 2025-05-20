import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode = false;

  constructor(private renderer: Renderer2) {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.setTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
    this.setTheme();
  }

  setTheme() {
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
