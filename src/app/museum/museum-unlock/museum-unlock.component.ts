import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../authentication/auth.service";
import { Token } from '../../authentication/token';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { faHome, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-museum-unlock',
  templateUrl: './museum-unlock.component.html',
  styleUrls: ['./museum-unlock.component.css']
})

export class MuseumUnlockComponent implements OnInit {

  // Declaramos los iconos a usar en la vista
  faHome = faHome;
  faBuildingColumns = faBuildingColumns;
  // Declaramos variables a utilizar
  token!: Token;
  museums: Array<Museum> = [];
  selected = false;
  selectedMuseum!: Museum;

  constructor(
    private authService: AuthService,
    private museumService: MuseumService,
    private toastr: ToastrService
  ) { }

  //Método que retorna todos los museos bloqueados
  getMuseums(): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseums(token.token, undefined, 'blocked').subscribe((museumsResponse) => {
        this.museums = museumsResponse.data;
      });
    });
  }

  //Método que permite actualizar el estado bloqueado de un museo
  updateMuseum(museum: Museum) {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.updateParcialMuseum(museum.id, { isBlocked: false }, token.token).subscribe(museumUpdate => {
        this.toastr.success("Confirmation", "Museum unblocked", { closeButton: true })
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
    })
  }

  //Método que asigna el museo selecccionado
  onSelected(museum: Museum): void {
    this.selected = true;
    this.selectedMuseum = museum;
  }

  ngOnInit() {
    this.getMuseums();
  }

}
