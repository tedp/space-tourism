import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  link: string;
  title: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() navLinks: NavLink[] = [];

  menuOpen = false;

  toggleMenu() {
    console.log('toggle');

    this.menuOpen = !this.menuOpen;
  }
}
