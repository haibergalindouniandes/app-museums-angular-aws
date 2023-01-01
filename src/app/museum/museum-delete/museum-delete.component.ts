import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/authentication/auth.service';
import { Token } from '../../authentication/token';
import { Museum } from '../museum';
import { MuseumService } from "../museum.service";

@Component({
  selector: 'app-museum-delete',
  templateUrl: './museum-delete.component.html',
  styleUrls: ['./museum-delete.component.css']
})
export class MuseumDeleteComponent implements OnInit {
  token!: Token;
  museum!: Museum;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService,
    private museumService: MuseumService,
  ) { }

  getMuseumById(id: number): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.getMuseum(id, token.token).subscribe((museum) => {
        this.museum = museum.data;
      });
    });
  }

  deleteMuseum(id: number): void {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.deleteMuseum(id, token.token).subscribe(museumDeleted => {
        this.toastr.success("Confirmation", museumDeleted.message);
        this.router.navigateByUrl('museums');
      })
    })
  }

  cancelUpdate(id: number): void {
    this.router.navigateByUrl(`museums/detail/${id}`);
  }

  ngOnInit() {
    //Lanzamos el método getMuseumById
    this.route.params.subscribe(params => this.getMuseumById(params['id']));
  }

}
