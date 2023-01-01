import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { AuthService } from 'src/app/authentication/auth.service';
import { Token } from '../../authentication/token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css']
})
export class MuseumCreateComponent implements OnInit {

  // Declaramos variables a utilizar
  token!: Token;
  museumForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService,
    private authService: AuthService) { }

  createMuseum(museum: Museum) {
    this.authService.login(environment.userApi, environment.passwordApi).subscribe((token) => {
      this.museumService.createMuseum(museum, token.token).subscribe(museumCreated => {
        this.toastr.success("Confirmation", "Museum created")
        this.museumForm.reset();
      })
    })
  }

  cancelCreation() {
    this.museumForm.reset();
  }

  ngOnInit() {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required]],
      address: ["", [Validators.required, Validators.maxLength(300)]],
      city: ["", [Validators.required, Validators.maxLength(150)]],
      image: ["", [Validators.required, Validators.pattern(urlRegex)]]
    });
  }

}
