import { NgClass } from '@angular/common';
import { Component, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  @Output() routerData = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const verticalOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = verticalOffset > 300;
  }

  clickMe(value: string) {
    this.routerData.emit(value)
  }
}
