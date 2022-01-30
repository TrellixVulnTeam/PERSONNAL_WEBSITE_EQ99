import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApigalerieService {
  constructor(private httpClient: HttpClient) {}

  //Cle API
  Key = 'ponUPZ1fOF_wctUEachkJWwThIFssU9rqcYsS6RRvPI';
  page = 1;
  per_page = 15;
  getImage() {
    //appel API
    return this.httpClient.get(
      `https://api.unsplash.com/users/adispe/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }
}
