import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Token } from '../../authentication/token';
import { Museum } from '../museum';
import { MuseumService } from "../museum.service";
import { faHome, faBuildingColumns, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Pattern para validar una URLS
const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

@Component({
  selector: 'app-museum-update',
  templateUrl: './museum-update.component.html',
  styleUrls: ['./museum-update.component.css']
})
export class MuseumUpdateComponent implements OnInit {

  // Declaramos los iconos a usar en la vista
  faAngleRight = faAngleRight;
  faHome = faHome;
  faBuildingColumns = faBuildingColumns;
  // Declaramos variables a utilizar
  token!: Token;
  museumForm!: FormGroup;
  museum!: Museum;

  constructor(
    private authService: AuthService,
    private museumService: MuseumService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  //Método que obtener un museo con base al ID
  getMuseumById(id: number): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseum(id, token.token).subscribe((museum) => {
        this.museum = museum.data;
        this.museumForm = new FormGroup({
          name: new FormControl(this.museum.name, [Validators.required, Validators.minLength(5)]),
          description: new FormControl(this.museum.description, [Validators.required]),
          address: new FormControl(this.museum.address, [Validators.required, Validators.maxLength(300)]),
          city: new FormControl(this.museum.city, [Validators.required, Validators.maxLength(150)]),
          image: new FormControl(this.museum.image, [Validators.required, Validators.pattern(urlRegex)]),
          isBlocked: new FormControl(this.museum.isBlocked)
        });
      });
    });
  }

  //Método que permite actualizar la informacion de un nuevo museo
  updateMuseum(museum: Museum) {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.updateMuseum(this.museum.id, museum, token.token).subscribe(museumUpdate => {
        this.toastr.success("Confirmation", "Museum update", { closeButton: true });
      })
    })
  }

  //Método que permite limpiar el formulario de creación de museos
  cancelUpdate(id: number) {
    this.router.navigateByUrl(`museums/detail/${id}`);
  }

  ngOnInit() {
    //Generamos formulario
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required]],
      address: ["", [Validators.required, Validators.maxLength(300)]],
      city: ["", [Validators.required, Validators.maxLength(150)]],
      image: ["", [Validators.required, Validators.pattern(urlRegex)]],
      isBlock: ["", [Validators.required]]
    });

    //Lanzamos el método getMuseumById
    this.route.params.subscribe(params => this.getMuseumById(params['id']));
  }

}
