import '../../node_modules/@bwc/bwc-activity-indicator';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './modules/app/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './modules/app/components/footer/footer.component';
import { HeaderComponent } from './modules/app/components/header/header.component';
import {
  InductionNotificationSenderComponent
} from './modules/onboarding/components/induction-management/induction-notification-sender/induction-notification-sender.component';
import {
  InductionPendingViewerComponent
} from './modules/onboarding/components/induction-management/induction-pending-viewer/induction-pending-viewer.component';
import {
  InductionTaskModifierComponent
} from './modules/onboarding/components/induction-management/induction-task-modifier/induction-task-modifier.component';
import {
  AssociateModifierComponent
} from './modules/onboarding/components/onboarding-management/associate-modifier/associate-modifier.component';
import {
  FileImporterComponent
} from './modules/onboarding/components/onboarding-management/file-importer/file-importer.component';
import {
  ProbationPendingViewerComponent
} from './modules/onboarding/components/probation-management/probation-pending-viewer/probation-pending-viewer.component';
import {
  ProbationTaskModifierComponent
} from './modules/onboarding/components/probation-management/probation-task-modifier/probation-task-modifier.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import {
  CustomSnackbarComponent
} from './shared/components/custom-snackbar/custom-snackbar.component';
import { DragDropDirective } from './shared/directives/drag-drop/drag-drop.directive';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';

export function createHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AssociateModifierComponent,
    BreadcrumbComponent,
    ConfirmComponent,
    CustomSnackbarComponent,
    DragDropDirective,
    FileImporterComponent,
    FooterComponent,
    HeaderComponent,
    InductionNotificationSenderComponent,
    InductionPendingViewerComponent,
    InductionTaskModifierComponent,
    ProbationPendingViewerComponent,
    ProbationTaskModifierComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
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
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AssociateModifierComponent,
    ConfirmComponent,
    CustomSnackbarComponent,
    FileImporterComponent,
    InductionNotificationSenderComponent,
    InductionPendingViewerComponent,
    InductionTaskModifierComponent,
    ProbationPendingViewerComponent,
    ProbationTaskModifierComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
