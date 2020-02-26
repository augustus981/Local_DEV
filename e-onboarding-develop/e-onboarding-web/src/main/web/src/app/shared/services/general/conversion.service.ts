import * as moment from 'moment';

import { Injectable } from '@angular/core';

import { DATE_FORMATS } from '../../constants/format';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  /** From MILLISECONDS to DATE */
  convertFromMillisecondsToDate(value: number): string {
    const date = new Date(value);
    return moment(date).format(DATE_FORMATS.display.dateInput);
  }

  /** From DATE TO MILLISECONDS */
  convertFromDateToMilliseconds(value: string): number {
    const milliseconds = moment(value).valueOf();
    return milliseconds;
  }
}
