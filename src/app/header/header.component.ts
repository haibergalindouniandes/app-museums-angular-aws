import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  // Declaramos los iconos a usar en la vista
  faSearch = faSearch;
  // Declaramos variables a utilizar
  menuOptions = new Map();
  event$

  constructor(private location: Location) {
    this.event$ = location.onUrlChange((path) => {
      this.getNavActiveMenu(path);
    })
  }

  //Método que retorna el menú de navegación actual
  getNavActiveMenu(path: string) {
    this.menuOptions.clear();
    let menu = path.split('/')[1].replace('/', '') + 'Menu';
    this.menuOptions.set(menu, 'active');
  }

  ngOnDestroy() { }
}
