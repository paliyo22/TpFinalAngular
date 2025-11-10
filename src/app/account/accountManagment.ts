import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AccountSchema } from '../../schema/user/account';


@Injectable({
  providedIn: 'root',
})
export class Account {
  private apiUrl = 'Averiguar el .env';
  private http = inject(HttpClient);

  accountState = signal({
    account: { // señal que guarda la informacion del usuario loggeado
      data: null as AccountSchema | null,
      loading: false,
      error: null as string | null
    }
  });

  
}
