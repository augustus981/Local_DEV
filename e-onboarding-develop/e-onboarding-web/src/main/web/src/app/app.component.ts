import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ApiInterceptor } from './shared/interceptors/api.interceptor';
import { UserAccount } from './shared/models/user/user-account';
import { UserService } from './shared/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  // Spinner
  @ViewChild('spinner', { read: ElementRef, static: true }) spinner: ElementRef;

  // Title
  title = 'e-onboarding';

  constructor(
    private translate: TranslateService,
    private userService: UserService
  ) { }

  ngAfterViewInit() {
    ApiInterceptor.spinner = this.spinner;
    this.getLanguage();
    this.userService.getLoggedInUser().subscribe((user: UserAccount) => {
      this.userService.user = user;
      console.log(this.userService.user);
    });
  }

  /** Get language */
  getLanguage() {
    this.translate.setDefaultLang('en');
    if (localStorage.getItem('language') == null) {
      this.translate.setDefaultLang('en');
      localStorage.setItem('language', 'en');
    } else {
      this.translate.use(localStorage.getItem('language'));
    }
  }
}
