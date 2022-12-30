import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  faSearch = faSearch;
  menuOptions = new Map();
  event$

  constructor(private location: Location) {
    this.event$ = location.onUrlChange((path) => {
      /* istanbul ignore next */
      this.getNavActiveMenu(path);
    })
  }

  /* istanbul ignore next */
  getNavActiveMenu(path: string) {
    this.menuOptions.clear();
    let menu = path.split('/')[1].replace('/', '') + 'Menu';
    this.menuOptions.set(menu, 'active');
  }

  ngOnDestroy() { }
}
