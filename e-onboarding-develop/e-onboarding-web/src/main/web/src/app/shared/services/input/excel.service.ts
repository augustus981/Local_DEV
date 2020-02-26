import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';
import * as XLSX from 'xlsx';

import { Injectable } from '@angular/core';

import { SNACKBAR } from '../../constants/snackbar';
import { Associate } from '../../models/associate/associate';
import { AssociateApiService } from '../associate/associate-api.service';
import { CommService } from '../comm/comm.service';

// Custom type declaration
type AOA = any[][];

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  // Current file name
  fileName = '';

  // Current workbook
  workbook: XLSX.WorkBook;

  constructor(
    private associateApiService: AssociateApiService,
    private commService: CommService,
    private snackBarUtil: SnackBarUtil
  ) { }

  /** Import file */
  importFile(files, fileInput: any) {
    // Maximum 1 file
    if (files.length > 1) {
      this.snackBarUtil.showSnackBar(SNACKBAR.FILE_LIMIT);
      fileInput.nativeElement.value = null;
      return;
    } else if (files[0].size > 20000000) {
      this.snackBarUtil.showSnackBar(SNACKBAR.FILE_SIZE);
      fileInput.nativeElement.value = null;
      return;
    } else {
      const extension = files[0].name.split('.')[1];
      if (extension !== 'xls' && extension !== 'xlsx') {
        this.snackBarUtil.showSnackBar(SNACKBAR.FILE_EXTENSION);
        fileInput.nativeElement.value = null;
        return;
      }
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      // Read Excel workbook
      const binaryString: string = e.target.result;
      this.workbook = XLSX.read(binaryString, { type: 'binary' });

      // Clear file input
      fileInput.nativeElement.value = null;

      this.commService.sendExcelData();
    };

    reader.readAsBinaryString(files[0]);
  }

  /** Convert sheet to JSON */
  convertSheet(sheetName: string) {
    // Grab first sheet
    const worksheetName: string = sheetName;
    const worksheet: XLSX.WorkSheet = this.workbook.Sheets[worksheetName];

    // Save data
    const fileData = (XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false })) as AOA;
    this.convertData(fileData);
  }

  /** Convert data to associate array */
  convertData(fileData: AOA) {
    const associates: Associate[] = [];

    for (let i = 1; i < fileData.length; i++) {
      const associate = new Associate(
        fileData[i][1] ? fileData[i][1].toString() : '',
        fileData[i][2] ? fileData[i][2].toString() : '',
        fileData[i][3] ? fileData[i][3].toString() : '',
        fileData[i][4] ? fileData[i][4].toString() : '',
        fileData[i][5] ? fileData[i][5].toString() : '',
        fileData[i][6] ? fileData[i][6].toString() : '',
        fileData[i][7] ? fileData[i][7].toString() : '',
        fileData[i][8] ? fileData[i][8].toString() : '',
        fileData[i][9] ? fileData[i][9].toString() : ''
      );
      associates.push(
        associate
      );
    }

    this.associateApiService.addMultipleAssociates(associates).subscribe(() => {
      this.commService.sendData();
      this.snackBarUtil.showSnackBar(SNACKBAR.IMPORT);
    });
  }
}
