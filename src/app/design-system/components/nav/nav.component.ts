import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  @Input() selectedNavIndex = 0;

  @Output() selectedNavChange = new EventEmitter<number>();

  menuOpen = false;

  constructor(private route: ActivatedRoute) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navLinkSelected(navLinkIndex: number) {
    this.selectedNavChange.emit(navLinkIndex);
  }
}
