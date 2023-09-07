import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private readonly _authenticatedSubject = new ReplaySubject<boolean>(0);
  readonly authenticated$ = this._authenticatedSubject.asObservable();

  constructor() {
    this._authenticatedSubject.next(false);
  }

  ngOnDestroy(): void {
    this._authenticatedSubject.complete();
  }

  login(username: string, password: string): void {
    const result = username === 'demo' && password === 'demo';
    this._authenticatedSubject.next(result);
  }

  logout(): void {
    this._authenticatedSubject.next(false);
  }
}
