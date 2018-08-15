import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable, of } from 'rxjs';

import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost/email.php';


  constructor(private http: Http) {
  }

  sendEmail(message) {
    console.log(message);
    return this.http.post(this.emailUrl, message).pipe(
      map((res) => {
        return res.json();
      }),
      catchError((err, caught) => caught)
    );
  }

}
