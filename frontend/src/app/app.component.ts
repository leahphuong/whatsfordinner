import { Component } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = "What's for dinner?";
  constructor(private auToken: Angular2TokenService) {
    this.auToken.init(environment.token_auth_config);
  }
}
