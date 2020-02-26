import { PROBATION } from 'src/app/shared/constants/content';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probation',
  templateUrl: './probation.component.html',
  styleUrls: ['./probation.component.scss']
})
export class ProbationComponent implements OnInit {

  // Constants
  readonly PROBATION = PROBATION;

  // Current content
  content: string = PROBATION.TO_DO;

  constructor() { }

  ngOnInit() {
  }

  /** Toggle content */
  toggleContent(content: string) {
    this.content = content;
  }
}
