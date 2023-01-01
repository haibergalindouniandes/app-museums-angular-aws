import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from "../authentication/auth.service";
import { Museum } from '../museum/museum';
import { MuseumService } from '../museum/museum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  museums: Array<Museum> = [];

  constructor(private authService: AuthService, private museumService: MuseumService) { }

  getMuseums(): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseums(token.token, environment.defaultLimitToQuery).subscribe((museumsResponse) => {
        this.museums = museumsResponse.data;
      });
    });
  }

  ngOnInit() {
    this.getMuseums();
  }

}
