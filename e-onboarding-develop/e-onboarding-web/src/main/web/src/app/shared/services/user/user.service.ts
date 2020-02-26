import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ROLES } from '../../constants/user';
import { UserAccount } from '../../models/user/user-account';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // User URI
  userUri = environment.baseUri + ':7002/onboarding/newcomer/userdetail';
  apiUri = environment.baseUri + ':7000/auth/api';
  newComersUri = this.apiUri + '/users';
  newComerUri = this.apiUri + '/user';
  accountEnablingUri = this.newComerUri + '/enable';
  accountDisablingUri = this.newComerUri + '/disable';

  // Current user
  user: UserAccount;

  // User role
  userRoleKey: string;
  userRole: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.userRoleKey = ROLES.MANAGER_KEY;
    this.userRole = ROLES.MANAGER;
  }

  /** Get logged in user */
  getLoggedInUser(): Observable<any> {
    return this.httpClient.get(this.userUri);
  }

  /** Toggle user account */
  toggleUserAccount(userAccount: UserAccount): Observable<any> {
    const options = {
    };

    return this.httpClient.put(
      `${userAccount.activated ? this.accountDisablingUri : this.accountEnablingUri}/${userAccount.userName}`,
      null,
      options
    );
  }

  /** Get user account */
  getUserAccount(associateId: number): Observable<any> {
    return this.httpClient.get(`${this.newComersUri}/${associateId}`);
  }
}
