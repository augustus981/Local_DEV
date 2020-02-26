import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Associate } from '../../models/associate/associate';

@Injectable({
  providedIn: 'root'
})
export class AssociateApiService {

  // URIs
  baseUri = environment.baseUri + ':7002/onboarding';
  getUri = this.baseUri + '/newcomer/all';
  addUri = this.baseUri + '/newcomer/insert';
  addMultipleUri = this.baseUri + '/newcomer/save';
  editUri = this.baseUri + '/newcomer/edit';
  deleteUri = this.baseUri + '/newcomer/delete';
  toggleAccountUri = this.baseUri + '/newcomer/toggleAccount';

  constructor(
    private httpClient: HttpClient
  ) { }

  /** Get associate */
  getAssociates(id: number): Observable<any> {
    let getParams: any;

    if (id) {
      // Params
      getParams = new HttpParams().set('id', id.toString());
    }

    const options = {
      params: getParams
    };

    return this.httpClient.get(this.getUri, options);
  }

  /** Add associate */
  addAssociate(associate: Associate): Observable<any> {
    const options = {
    };

    return this.httpClient.post(
      this.addUri,
      associate,
      options);
  }

  /** Add multiple associates */
  addMultipleAssociates(associates: Associate[]): Observable<any> {
    const options = {
    };

    return this.httpClient.post(
      this.addMultipleUri,
      associates,
      options
    );
  }

  /** Edit associate */
  editAssociate(associate: Associate): Observable<any> {
    const options = {
    };

    return this.httpClient.put(
      this.editUri,
      associate,
      options);
  }

  /** Delete associate */
  deleteAssociate(associate: Associate): Observable<any> {
    const options = {
    };

    return this.httpClient.put(
      this.deleteUri,
      associate,
      options);
  }
}
