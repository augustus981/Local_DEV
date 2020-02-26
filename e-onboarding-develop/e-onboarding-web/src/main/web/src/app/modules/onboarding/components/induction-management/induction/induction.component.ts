import { INDUCTION } from 'src/app/shared/constants/content';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-induction',
  templateUrl: './induction.component.html',
  styleUrls: ['./induction.component.scss']
})
export class InductionComponent implements OnInit {

  // Constants
  readonly INDUCTION = INDUCTION;

  // Current content
  content: string = INDUCTION.TO_DO;

  constructor() { }

  ngOnInit() {
  }

  /** Toggle content */
  toggleContent(content: string) {
    this.content = content;
  }
}
