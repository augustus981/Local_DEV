import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  // Transferred data
  private data: BehaviorSubject<any> = new BehaviorSubject('');
  private excelData: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  /** Send data from one component to another */
  sendData() {
    this.data.next([]);
  }

  /** Get data */
  getData(): Observable<any> {
    return this.data.asObservable();
  }

  /** Send data from one component to another */
  sendExcelData() {
    this.excelData.next([]);
  }

  /** Get data */
  getExcelData(): Observable<any> {
    return this.excelData.asObservable();
  }
}
