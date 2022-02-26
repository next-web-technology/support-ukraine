import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MENUS } from './models/menus/menu';
import { DEVELOPER_LINKS } from './models/links/links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hamburgerMenuIcon = faBars;
  menus = MENUS;
  developerInfo = {
    name: 'Developer Info',
    links: DEVELOPER_LINKS,
  };
}
