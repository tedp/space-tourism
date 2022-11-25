import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
  @Input() selectedNavIndex = 0;

  menuOpen = false;

  constructor(private route: ActivatedRoute) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
