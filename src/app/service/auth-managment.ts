import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Role } from '../../enum/role';
import { Url } from '../../common/const';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private apiUrl = `${Url}/...`;
  private http = inject(HttpClient);

  authState = signal({
    logged: false,
    username: null as string | null,
    role: null as Role | null,
    loading: false,
    error: null as string | null
  });

  setState(): void {
    this.authState.update(() => ({
      logged: false,
      username: null,
      role: null,
      loading: false,
      error: null
    }));
  }
}
