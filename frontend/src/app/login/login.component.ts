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

  onLoginFormResult(e){
    if(e.signedIn)
      this.closeDialog();
    else{
      alert(e.err.json().errors[0]);
    }
  }

  openDialog(mode: 'login' | 'register' = 'login') {
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  ngOnInit() {
  }
  isLoginMode() {return this.authMode == 'login'};
  isRegisterMode() {return this.authMode == 'register'};
}
