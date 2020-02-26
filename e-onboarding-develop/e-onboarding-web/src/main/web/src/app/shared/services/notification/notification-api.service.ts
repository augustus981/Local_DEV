import { Observable } from 'rxjs';
import { InductionMessage } from 'src/app/shared/models/induction/induction-message';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationApiService {

  // URIs
  baseUri = environment.baseUri + ':7002/onboarding';
  sendUri = this.baseUri + '/assigment/push_notification';

  constructor(
    private httpClient: HttpClient
  ) { }

  /** Send induction notification */
  sendInductionNotification(inductionMessage: InductionMessage): Observable<any> {
    inductionMessage.message = this.processMessage(inductionMessage);

    const options = {
    };

    return this.httpClient.post(this.sendUri,
      inductionMessage,
      options
    );
  }

  /** Process message */
  processMessage(inductionMessage: InductionMessage): string {
    return inductionMessage.message.replace(/\n/g, '<br>');
  }
}
