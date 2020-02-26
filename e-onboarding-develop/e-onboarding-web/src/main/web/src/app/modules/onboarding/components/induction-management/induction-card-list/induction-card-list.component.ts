import { INDUCTION } from 'src/app/shared/constants/content';
import { NewcomerTask } from 'src/app/shared/models/associate/newcomer-task';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import {
  InductionTaskApiService
} from 'src/app/shared/services/induction/induction-task/induction-task-api.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import {
  InductionTaskModifierComponent
} from '../induction-task-modifier/induction-task-modifier.component';

@Component({
  selector: 'app-induction-card-list',
  templateUrl: './induction-card-list.component.html',
  styleUrls: ['./induction-card-list.component.scss']
})
export class InductionCardListComponent implements OnInit {

  // Constants
  readonly INDUCTION = INDUCTION;

  // Paginator component
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // Induction tasks
  inductionTasks: NewcomerTask[] = [];

  // Table data source
  dataSource: MatTableDataSource<NewcomerTask>;

  constructor(
    private commService: CommService,
    private dialogService: DialogService,
    private inductionTaskApiService: InductionTaskApiService
  ) { }

  ngOnInit() {
    this.getData();
  }

  /** Get data */
  getData() {
    this.commService.getData().subscribe(() => {
      this.inductionTaskApiService.getInductionTasks(null).subscribe((result: NewcomerTask[]) => {
        result = result.filter((element: NewcomerTask) => {
          return element.checklistType === 'Induction';
        });
        this.updateList(result);
      });
    });
  }

  /** Update list */
  updateList(result: NewcomerTask[]) {
    this.dataSource = new MatTableDataSource<NewcomerTask>(result);
    this.dataSource.paginator = this.paginator;

    // Set induction task array
    let index = -1;
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;

    this.inductionTasks = this.dataSource.data.filter(() => {
      index++;
      return (startIndex <= index && index < endIndex) ? true : false;
    });
  }

  /** Add card */
  addCard() {
    const dialogRef = this.dialogService.openDialog(InductionTaskModifierComponent);
  }

  /** Edit card */
  editCard(element: NewcomerTask) {
    const dialogRef = this.dialogService.openDialog(InductionTaskModifierComponent, Object(element));
  }
}
