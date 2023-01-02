import { Component, OnInit } from '@angular/core';
//Imports
import { faFacebookF, faTwitter, faInstagram, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Declaramos los iconos a usar en la vista
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
