import {
  PROBATION_PENDING_COL_KEYS, PROBATION_PENDING_COLS
} from 'src/app/shared/constants/content';
import { TOOLTIP } from 'src/app/shared/constants/tooltip';
import { Associate } from 'src/app/shared/models/associate/associate';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ConversionService } from 'src/app/shared/services/general/conversion.service';
import { ExcelService } from 'src/app/shared/services/input/excel.service';
import {
  ProbationPendingApiService
} from 'src/app/shared/services/probation/probation-pending/probation-pending-api.service';

import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {
  ProbationPendingViewerComponent
} from '../probation-pending-viewer/probation-pending-viewer.component';

@Component({
  selector: 'app-probation-pending-table',
  templateUrl: './probation-pending-table.component.html',
  styleUrls: ['./probation-pending-table.component.scss']
})
export class ProbationPendingTableComponent implements OnInit, OnDestroy {

  // Constants
  readonly PROBATION_PENDING_COLS = PROBATION_PENDING_COLS;
  readonly TOOLTIP = TOOLTIP;

  // Paginator component
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // Sort feature
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // File input
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  // Group card collection
  @ViewChild('groupCardCollection', { read: ElementRef, static: true }) groupCardCollection: ElementRef;

  // Table default columns
  displayedColumns = [
    PROBATION_PENDING_COL_KEYS.NO,
    PROBATION_PENDING_COL_KEYS.NAME,
    PROBATION_PENDING_COL_KEYS.GROUP,
    PROBATION_PENDING_COL_KEYS.PREFIX,
    PROBATION_PENDING_COL_KEYS.COMPETENCE,
    PROBATION_PENDING_COL_KEYS.EMAIL,
    PROBATION_PENDING_COL_KEYS.PHONE,
    PROBATION_PENDING_COL_KEYS.REMARK,
    PROBATION_PENDING_COL_KEYS.JOINING_DATE,
    PROBATION_PENDING_COL_KEYS.ACTION
  ];

  // Table data source
  dataSource: MatTableDataSource<Associate>;

  // Selection
  selection = new SelectionModel<Associate>(true, []);

  // Current imported workbook
  sheets: string[];

  /** Responsive settings */
  private screenQueryListener: () => void;
  screenQuery: MediaQueryList;

  constructor(
    public conversionService: ConversionService,
    public excelService: ExcelService,
    private cd: ChangeDetectorRef,
    private commService: CommService,
    private dialogService: DialogService,
    private probationPendingApiService: ProbationPendingApiService,
    private media: MediaMatcher
  ) {
    // Detect screen change
    this.screenQuery = this.media.matchMedia('(max-width: 800px)');
    this.screenQueryListener = () => this.cd.detectChanges();
    this.screenQuery.addEventListener('change', this.screenQueryListener);
  }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.screenQuery.removeEventListener('change', this.screenQueryListener);
  }

  /** Get data */
  getData() {
    this.commService.getData().subscribe(() => {
      this.probationPendingApiService.getAssociates(null).subscribe((result: Associate[]) => {
        if (result) {
          this.updateTable(result);
        }
      });
    });
  }

  /** Set responsive class */
  setResponsiveClass(): string {
    return this.screenQuery.matches ? 'mobile-table-sidenav' : 'table-sidenav';
  }

  /** Apply table filter */
  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  /** Update pending associate table */
  updateTable(data: Associate[]) {
    this.dataSource = new MatTableDataSource<Associate>(data);

    // Set paginator after data existed
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Clear all checkboxes
    this.selection = new SelectionModel<Associate>(true, []);
  }

  /** View pending tasks of an associate */
  viewPendingTasks(associate: Associate) {
    const dialogRef = this.dialogService.openDialog(ProbationPendingViewerComponent, Object(associate));
  }
}
