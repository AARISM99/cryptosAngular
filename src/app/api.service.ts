import { Injectable } from '@angular/core';

import '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CryptoModel } from './models/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  cryptosUrl = 'http://localhost:8080/cryptos';
  scrapingUrl = 'http://localhost:5000'

  constructor(private http: HttpClient) { }


  getCryptos(): Observable<CryptoModel[]> {
    return this.http.get<CryptoModel[]>(this.cryptosUrl);
  }

  lancerScraping(nbre_page?: number){
    return this.http.get<any>(this.scrapingUrl + "/lancerScraping?nbre_pages="+nbre_page);
  }

}
