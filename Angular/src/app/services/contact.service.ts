// Service du formulaire de contact

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactModel } from '../models/contact-model';
import { map } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // API URL
  private mailApi = 'https://mailthis.to/webmaster.adisperati@outlook.fr'

  constructor(private http: HttpClient) { }

  // methode d'envoi du message
  PostMessage(input: any){
    return this.http.post(this.mailApi, input, { responseType: 'text'})
    .pipe(
      map(
        (response) => {
          if(response){
            return response;
          }else{
            return null;
          }
        },
        (error: any)=> {
          return error;
        }
      )
    )
  }
}
