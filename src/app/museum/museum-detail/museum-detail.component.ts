import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome, faBuildingColumns, faAngleRight, faEdit, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from 'src/app/authentication/auth.service';
import { environment } from 'src/environments/environment';
import { Museum } from '../museum';
import { MuseumService } from "../museum.service";

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  faAngleRight = faAngleRight;
  faHome = faHome;
  faBuildingColumns = faBuildingColumns;
  faEdit = faEdit;
  faDeleteLeft = faDeleteLeft;

  museum!: Museum;

  constructor(
    private authService: AuthService,
    private museumService: MuseumService,
    private route: ActivatedRoute
  ) { }

  getMuseumById(id: number): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseum(id, token.token).subscribe((museum) => {
        this.museum = museum.data;
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getMuseumById(params['id']))
  }

}
