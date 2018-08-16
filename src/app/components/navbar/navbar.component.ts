import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggle: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 768) {
      // this.toggle = false;
    }
  }

  public toggleNav(): void {
    this.toggle = !this.toggle;
  }

  public hideNav(): void {
    if (window.innerWidth < 768) {
      this.toggle = !this.toggle;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
