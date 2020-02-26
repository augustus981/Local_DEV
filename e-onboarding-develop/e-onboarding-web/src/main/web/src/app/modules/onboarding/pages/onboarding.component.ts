import { ROLES } from 'src/app/shared/constants/user';
import { UserService } from 'src/app/shared/services/user/user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  // Constants
  readonly ROLES = ROLES;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() { }
}
