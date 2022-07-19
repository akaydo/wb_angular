import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IToken {
  data: string[]
}

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  constructor(private http: HttpClient) { }

  getTokens(): Observable<IToken> {
    return this.http.get<IToken>(
      'https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights-full.json'
    );
  }

}
