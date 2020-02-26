import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InductionPendingApiService {

  // URIs
  baseUri = environment.baseUri + ':7002/onboarding';
  getAssociateUri = this.baseUri + '/assigment/newcomer_pendingtask_induction';
  getTaskUri = this.baseUri + '/assigment/pendingtask_induction';

  constructor(
    private httpClient: HttpClient
  ) { }

  /** Get associate */
  getAssociates(id: number): Observable<any> {
    let getParams: any;

    if (id) {
      getParams = new HttpParams().set('id', id.toString());
    }

    const options = {
      params: getParams
    };

    return this.httpClient.get(this.getAssociateUri, options);
  }

  /** Get tasks */
  getTasks(id: number): Observable<any> {
    return this.httpClient.get(`${this.getTaskUri}/${id}`);
  }
}
