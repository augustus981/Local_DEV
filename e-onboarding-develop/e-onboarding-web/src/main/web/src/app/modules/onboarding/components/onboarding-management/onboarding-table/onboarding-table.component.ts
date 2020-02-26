import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { ONBOARDING_COL_KEYS, ONBOARDING_COLS } from 'src/app/shared/constants/content';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { CONFIRM_MSSG } from 'src/app/shared/constants/message';
import { SNACKBAR } from 'src/app/shared/constants/snackbar';
import { TOOLTIP } from 'src/app/shared/constants/tooltip';
import { Associate } from 'src/app/shared/models/associate/associate';
import { UserAccount } from 'src/app/shared/models/user/user-account';
import { AssociateApiService } from 'src/app/shared/services/associate/associate-api.service';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ConversionService } from 'src/app/shared/services/general/conversion.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';

import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { AssociateModifierComponent } from '../associate-modifier/associate-modifier.component';
import { FileImporterComponent } from '../file-importer/file-importer.component';

@Component({
  selector: 'app-onboarding-table',
  templateUrl: './onboarding-table.component.html',
  styleUrls: ['./onboarding-table.component.scss']
})
export class OnboardingTableComponent implements OnInit, OnDestroy {

  // Constants
  readonly ONBOARDING_COLS = ONBOARDING_COLS;
  readonly TOOLTIP = TOOLTIP;

  // Paginator component
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // Sort feature
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Group card collection
  @ViewChild('groupCardCollection', { read: ElementRef, static: true }) groupCardCollection: ElementRef;

  // Table default columns
  displayedColumns = [
    ONBOARDING_COL_KEYS.SELECT,
    ONBOARDING_COL_KEYS.NO,
    ONBOARDING_COL_KEYS.NAME,
    ONBOARDING_COL_KEYS.GROUP,
    ONBOARDING_COL_KEYS.PREFIX,
    ONBOARDING_COL_KEYS.COMPETENCE,
    ONBOARDING_COL_KEYS.EMAIL,
    ONBOARDING_COL_KEYS.PHONE,
    ONBOARDING_COL_KEYS.REMARK,
    ONBOARDING_COL_KEYS.JOINING_DATE,
    ONBOARDING_COL_KEYS.ACTION
  ];

  // Table data source
  dataSource: MatTableDataSource<Associate>;

  // Selection
  selection = new SelectionModel<Associate>(true, []);

  /** Responsive settings */
  private screenQueryListener: () => void;
  screenQuery: MediaQueryList;

  constructor(
    public conversionService: ConversionService,
    private associateApiService: AssociateApiService,
    private cd: ChangeDetectorRef,
    private commService: CommService,
    private dialogService: DialogService,
    private media: MediaMatcher,
    private snackBarUtil: SnackBarUtil,
    private userService: UserService
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
      this.associateApiService.getAssociates(null).subscribe((result: Associate[]) => {
        if (result) {
          for (const element of result) {
            this.userService.getUserAccount(element.id).subscribe((userAccount: UserAccount) => {
              element.userAccount = userAccount;
            });
          }
          this.updateTable(result);
        }
      });
    });
  }

  /** Import file */
  importFile() {
    this.dialogService.openDialog(FileImporterComponent);
  }

  /** Set responsive class */
  setResponsiveClass(): string {
    return this.screenQuery.matches ? 'mobile-table-sidenav' : 'table-sidenav';
  }

  /** Check if all rows are selected */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Select row checkboxes when selecting master checkbox */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Apply table filter */
  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  /** Update associate table */
  updateTable(data: Associate[]) {
    this.dataSource = new MatTableDataSource<Associate>(data);

    // Set paginator after data existed
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Clear all checkboxes
    this.selection = new SelectionModel<Associate>(true, []);
  }

  /** Add associate */
  addAssociate() {
    const dialogRef = this.dialogService.openDialog(AssociateModifierComponent);

    // Sending null data, input fields are empty
    // this.associateApiService.associate = null;
  }

  /** Edit associate */
  editAssociate(element: Associate) {
    const dialogRef = this.dialogService.openDialog(AssociateModifierComponent, Object(element));

    // Sending table's associate data, input fields correspond to table data
    // this.associateApiService.associate = element;
  }

  /** Delete associate */
  deleteAssociate(element: Associate) {
    const dialogRef = this.dialogService.openDialog(ConfirmComponent,
      {
        title: CONFIRM_MSSG.DELETE_TITLE,
        message: CONFIRM_MSSG.DELETE_CONFIRM
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === DIALOG.EVENT_YES) {
        this.associateApiService.deleteAssociate(element).subscribe(() => {
          this.getData();
          this.snackBarUtil.showSnackBar(SNACKBAR.DELETE_ASSOCIATE);
        });
      }
    });
  }

  /** Delete selected associate */
  deleteSelectedAssociate() {
    const selectedAssociates: Associate[] = this.selection.selected;
    let dialogRef: MatDialogRef<any, any>;

    if (selectedAssociates.length > 0) {
      dialogRef = this.dialogService.openDialog(ConfirmComponent,
        {
          title: CONFIRM_MSSG.DELETE_TITLE,
          message: CONFIRM_MSSG.DELETE_CONFIRM
        }
      );

      dialogRef.afterClosed().subscribe(result => {
        if (result.event === 'yes') {
          for (let i = 0; i < selectedAssociates.length - 1; i++) {
            this.associateApiService.deleteAssociate(selectedAssociates[i]).subscribe();
          }

          this.associateApiService.deleteAssociate(selectedAssociates[selectedAssociates.length - 1]).subscribe(() => {
            this.getData();
            this.snackBarUtil.showSnackBar(SNACKBAR.DELETE_ASSOCIATE);
          });
        }
      });
    }
  }

  /** Toggle user account */
  toggleUserAccount(element: Associate) {
    const dialogRef = this.dialogService.openDialog(ConfirmComponent,
      {
        title: CONFIRM_MSSG.TOGGLE_ACCOUNT_TITLE,
        message: CONFIRM_MSSG.TOGGLE_ACCOUNT_CONFIRM
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'yes') {
        this.userService.getUserAccount(element.id).subscribe((userAccount: UserAccount) => {
          this.userService.toggleUserAccount(userAccount).subscribe(() => {
            if (userAccount.activated) {
              this.snackBarUtil.showSnackBar(SNACKBAR.DISABLE_ACCOUNT, { name: element.name });
            } else {
              this.snackBarUtil.showSnackBar(SNACKBAR.ENABLE_ACCOUNT, { name: element.name });
            }

            // Refresh table
            this.getData();
          });
        });
      }
    });
  }
}
