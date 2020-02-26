import {
  CustomPaginatorComponent
} from 'src/app/shared/components/custom-paginator/custom-paginator.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import {
  InductionCardListComponent
} from './components/induction-management/induction-card-list/induction-card-list.component';
import {
  InductionCardComponent
} from './components/induction-management/induction-card/induction-card.component';
import {
  InductionPendingTableComponent
} from './components/induction-management/induction-pending-table/induction-pending-table.component';
import {
  InductionComponent
} from './components/induction-management/induction/induction.component';
import {
  OnboardingTableComponent
} from './components/onboarding-management/onboarding-table/onboarding-table.component';
import {
  ProbationCardListComponent
} from './components/probation-management/probation-card-list/probation-card-list.component';
import {
  ProbationCardComponent
} from './components/probation-management/probation-card/probation-card.component';
import {
  ProbationPendingTableComponent
} from './components/probation-management/probation-pending-table/probation-pending-table.component';
import {
  ProbationComponent
} from './components/probation-management/probation/probation.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './pages/onboarding.component';

@NgModule({
  declarations: [
    CustomPaginatorComponent,
    InductionCardComponent,
    InductionCardListComponent,
    InductionComponent,
    InductionPendingTableComponent,
    OnboardingComponent,
    OnboardingTableComponent,
    ProbationCardComponent,
    ProbationCardListComponent,
    ProbationComponent,
    ProbationPendingTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class OnboardingModule { }
