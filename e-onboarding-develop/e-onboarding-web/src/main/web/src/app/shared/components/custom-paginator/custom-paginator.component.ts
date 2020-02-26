import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit, OnChanges {

  // Input properties
  @Input() dataSource: any;
  @Input() paginator: MatPaginator;

  // Page number array
  pages: number[] = [];

  constructor() { }

  ngOnInit() {
    this.setPages();
  }

  ngOnChanges() {
    // Set pages when data change
    this.setPages();
  }

  /** Set pages */
  setPages() {
    if (this.dataSource.data) {
      const pageNumber = Math.ceil(this.dataSource.data.length / this.paginator.pageSize);
      this.pages.splice(0, this.pages.length);
      for (let i = 0; i < pageNumber; i++) {
        this.pages.push(i + 1);
      }
    }
  }

  /** Change page size */
  changePageSize(pageSize: number) {
    this.paginator.pageSize = pageSize;
    this.paginator._changePageSize(this.paginator.pageSize);

    // Reload pages after changing page size
    this.setPages();
    this.goToPage(1);
  }

  /** Go to page */
  goToPage(page: number) {
    this.paginator.pageIndex = page - 1;
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  /** Go to first page */
  goToFirstPage() {
    this.paginator.firstPage();
  }

  /** Go to previous page */
  goToPreviousPage() {
    this.paginator.previousPage();
  }

  /** Go to next page */
  goToNextPage() {
    this.paginator.nextPage();
  }

  /** Go to last page */
  goToLastPage() {
    this.paginator.lastPage();
  }
}
