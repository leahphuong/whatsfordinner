import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('login') login: LoginComponent;
  constructor(public tokenAuthService: Angular2TokenService) { }

  ngOnInit() {
  }
  presentLogin(mode?: 'login' | 'register') {
    this.login.openDialog(mode);
  }
}
