import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Url } from "../../common/const";
import { CreateAdmin, CreateBusiness, CreateUser } from "../../schema/user/create-account";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AccountCreation {
  private apiUrl = `${Url}/account`;
  private http = inject(HttpClient);

  createAccount(account: CreateBusiness | CreateAdmin | CreateUser): Observable<boolean | string> {
    return this.http.post<void>(`${this.apiUrl}`, {})
    .pipe(
        map(() => true),
        catchError((error) => of(error.error?.error || 'Error al registrarse'))
    );    
  }
}