import { INDUCTION } from 'src/app/shared/constants/content';
import { NewcomerTask } from 'src/app/shared/models/associate/newcomer-task';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import {
  ProbationTaskApiService
} from 'src/app/shared/services/probation/probation-task/probation-task-api.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import {
  ProbationTaskModifierComponent
} from '../probation-task-modifier/probation-task-modifier.component';

@Component({
  selector: 'app-probation-card-list',
  templateUrl: './probation-card-list.component.html',
  styleUrls: ['./probation-card-list.component.scss']
})
export class ProbationCardListComponent implements OnInit {

  // Constants
  readonly INDUCTION = INDUCTION;

  // Paginator component
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // Probation cards
  probationTasks: NewcomerTask[] = [];

  // Table data source
  dataSource: MatTableDataSource<NewcomerTask>;

  constructor(
    private commService: CommService,
    private dialogService: DialogService,
    private probationTaskApiService: ProbationTaskApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  /** Get data */
  getData() {
    this.commService.getData().subscribe(() => {
      this.probationTaskApiService.getProbationTasks(null).subscribe((result: NewcomerTask[]) => {
        result = result.filter((element: NewcomerTask) => {
          return element.checklistType === 'Competence';
        });
        this.updateList(result);
      });
    });
  }

  /** Update list */
  updateList(result: NewcomerTask[]) {
    this.dataSource = new MatTableDataSource<NewcomerTask>(result);
    this.dataSource.paginator = this.paginator;

    // Set probation task array
    let index = -1;
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;

    this.probationTasks = this.dataSource.data.filter(() => {
      index++;
      return (startIndex <= index && index < endIndex) ? true : false;
    });
  }

  /** Add card */
  addCard() {
    const dialogRef = this.dialogService.openDialog(ProbationTaskModifierComponent);
  }

  /** Edit card */
  editCard(element: NewcomerTask) {
    const dialogRef = this.dialogService.openDialog(ProbationTaskModifierComponent, Object(element));
  }
}
