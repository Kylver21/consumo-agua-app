import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() darkMode = false;
  @Output() toggleTheme = new EventEmitter<void>();

  onToggleTheme() {
    this.toggleTheme.emit();
  }
}
