import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

const baseUrl  = 'https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json'

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(baseUrl)
        .pipe(map(result => result));
  }
}
