import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-shared-login/shared';
import { Observable, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'ng-shared-login-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  get authenticated(): boolean { return this._authenticated; }
  private _authenticated = false;

  constructor(private readonly _router: Router,
    private readonly _userService: UserService) { }

  ngOnInit(): void {
      this._userService.authenticated$.pipe(
        distinctUntilChanged()
      ).subscribe(value => {
        this._authenticated = value;
        setTimeout(() => {
          const nextUrl = value ? '' : 'login';
          this._router.navigateByUrl(nextUrl);
        });
      });
  }
}
