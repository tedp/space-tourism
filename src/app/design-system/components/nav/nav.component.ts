import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface NavLink {
  link: string;
  title: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() navLinks: NavLink[] = [];

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('toggle', this.menuOpen);
  }
}
