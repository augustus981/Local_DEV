import { ROLES } from 'src/app/shared/constants/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { environment } from 'src/environments/environment';

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Constants
  readonly ROLES = ROLES;

  // @ViewChild('buttonContainer', { static: true }) buttonContainer: ElementRef;

  // Current page
  currentPage: string;

  // Log out URI
  // logOutUri = 'http://localhost:9000/auth/logout';
  // baseUri = environment.baseUri + ':7001/onboarding';
  logOutUri = environment.baseUri + ':7000/auth/logout';

  constructor(
    public router: Router,
    public userService: UserService,
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {
    this.currentPage = 'Digital Employee Experience';
  }

  ngOnInit() {
  }

  /** Focus link */
  // focus($event) {
  //   for (const child of this.buttonContainer.nativeElement.children) {
  //     this.renderer.removeClass(child, 'active-button');
  //   }
  //   this.renderer.addClass($event.target, 'active-button');
  // }

  /** Change user role */
  changeUserRole(roleKey: any, role: any) {
    this.userService.userRoleKey = roleKey;
    this.userService.userRole = role;
  }

  /** Get user role */
  getUserRole(): string {
    switch (this.userService.user.userName) {
      default:
        return '';

      case 'huy':
        this.userService.userRoleKey = ROLES.HR_RECRUITER_KEY;
        this.userService.userRole = ROLES.HR_RECRUITER;
        return 'HR Recruiter';

      case 'tuan':
        this.userService.userRoleKey = ROLES.HR_MANAGER_KEY;
        this.userService.userRole = ROLES.HR_MANAGER;
        return 'HR Manager';

      case 'user':
        this.userService.userRoleKey = ROLES.MANAGER_KEY;
        this.userService.userRole = ROLES.MANAGER;
        return 'Manager';
    }
  }

  /** Change language */
  changeLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('language', language);
  }

  /** Log out */
  logOut() {
    window.location.href = this.logOutUri;
  }
}
