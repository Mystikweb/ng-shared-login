import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@ng-shared-login/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'login-entry',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  get loginForm(): FormGroup {
    return this._loginForm;
  }
  private _loginForm!: FormGroup;

  get authenticated$(): Observable<boolean> {
    return this._userService.authenticated$;
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    this._loginForm = this._formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login(): void {
    const { username, password } = this._loginForm.getRawValue();
    this._userService.login(username, password);
  }
}
