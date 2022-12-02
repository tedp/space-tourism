import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

export interface Tab {
  name: string;
}
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[] = [];
  @Input() selectedTabIndex = 0;
  @Input() selectedTabName?: string;
  @Input() labelStyle: 'none' | 'numbered' | 'tab-name' = 'tab-name';

  @Output() selectedTabChanged = new EventEmitter<number>();

  tabFocus = 0;

  ngOnInit() {
    if (this.selectedTabName) {
      this.selectedTabIndex = this.tabs.findIndex(
        (tab) => tab.name === this.selectedTabName
      );
    }
    this.tabFocus = this.selectedTabIndex;
  }

  changeTabFocus(e: KeyboardEvent, tablist: HTMLDivElement) {
    const arrowRight = 'ArrowRight';
    const arrowLeft = 'ArrowLeft';

    if (e.key === arrowLeft || e.key === arrowRight) {
      const tabs = tablist.children;

      tabs[this.tabFocus].setAttribute('tabIndex', '-1');
      const direction = e.key === arrowLeft ? -1 : +1;
      this.tabFocus =
        (this.tabFocus + (direction % tabs.length) + tabs.length) % tabs.length;

      tabs[this.tabFocus].setAttribute('tabIndex', '0');
      (tabs[this.tabFocus] as HTMLButtonElement).focus();
    }
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
    this.tabFocus = this.selectedTabIndex;
    this.selectedTabChanged.emit(this.selectedTabIndex);
  }
}
