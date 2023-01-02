import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from "../../authentication/auth.service";
import { Token } from '../../authentication/token';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { faHome, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})

export class MuseumListComponent implements OnInit {
  // Declaramos los iconos a usar en la vista
  faHome = faHome;
  faBuildingColumns = faBuildingColumns;
  // Declaramos variables a utilizar
  token!: Token;
  museums: Array<Museum> = [];

  constructor(private authService: AuthService, private museumService: MuseumService) { }

  //Método que retorna todos los museos registrados
  getMuseums(): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseums(token.token).subscribe((museumsResponse) => {
        this.museums = museumsResponse.data;
      });
    });
  }

  ngOnInit() {
    this.getMuseums();
  }

}
