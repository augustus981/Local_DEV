import { Observable } from 'rxjs';
import { NewcomerTask } from 'src/app/shared/models/associate/newcomer-task';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProbationTaskApiService {

  // URIs
  baseUri = environment.baseUri + ':7002/onboarding';
  getUri = this.baseUri + '/assigment/all';
  addUri = this.baseUri + '/assigment/insert_assignment_competence';
  editUri = this.baseUri + '/assigment/edit';
  deleteUri = this.baseUri + '/assigment/delete';

  constructor(
    private httpClient: HttpClient
  ) { }

  /** Get probation tasks */
  getProbationTasks(id: number): Observable<any> {
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

  /** Add probation task */
  addProbationTask(probationTask: NewcomerTask): Observable<any> {
    const options = {
    };

    return this.httpClient.post(
      this.addUri,
      probationTask,
      options);
  }

  /** Edit probation task */
  editProbationTask(probationTask: NewcomerTask): Observable<any> {
    const options = {
    };

    return this.httpClient.put(
      this.editUri,
      probationTask,
      options);
  }

  /** Delete probation task */
  deleteProbationTask(probationTask: NewcomerTask): Observable<any> {
    const options = {
    };

    return this.httpClient.put(
      this.deleteUri,
      probationTask,
      options);
  }
}
