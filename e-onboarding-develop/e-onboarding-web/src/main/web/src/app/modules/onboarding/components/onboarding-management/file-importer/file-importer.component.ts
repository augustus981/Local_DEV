import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { ExcelService } from 'src/app/shared/services/input/excel.service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-file-importer',
  templateUrl: './file-importer.component.html',
  styleUrls: ['./file-importer.component.scss']
})
export class FileImporterComponent implements OnInit {

  // Constants
  readonly BUTTON_LABELS = BUTTON_LABELS;

  // File input
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  // Current imported workbook
  sheets = [];

  constructor(
    public dialogRef: MatDialogRef<FileImporterComponent>,
    public excelService: ExcelService,
    private commService: CommService
  ) { }

  ngOnInit() {
    this.getSignal();
  }

  /** Get signal */
  getSignal() {
    this.commService.getExcelData().subscribe(() => {
      // Assign workbook
      if (this.excelService.workbook) {
        this.sheets = this.excelService.workbook.SheetNames;
      }
    });
  }

  /** Download sample file */
  downloadSampleFile() {
    const downloadLink = document.createElement('a');
    downloadLink.download = 'sample-file';
    downloadLink.href = 'assets/files/sample-file.xlsx';
    downloadLink.click();
  }

  /** Process file input */
  processFile(files: any) {
    // Clear sheet array
    this.sheets.splice(0, this.sheets.length);

    this.excelService.importFile(files, this.fileInput);
    this.excelService.fileName = files[0] ? files[0].name : '';
  }

  /** Delete file */
  deleteFile() {
    // Clear sheet array
    this.sheets.splice(0, this.sheets.length);
  }

  /** Import sheet */
  importSheet(sheet: any) {
    this.excelService.convertSheet(sheet);
    this.close();
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }
}
