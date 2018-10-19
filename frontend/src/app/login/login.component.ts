import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();
  constructor() { }
  openDialog(mode: 'login' | 'register' = 'login') {
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }
  ngOnInit() {
  }
}
