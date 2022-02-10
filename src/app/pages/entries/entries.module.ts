import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import { CalendarModule } from 'primeng/calendar';
import { EntriesRoutingModule } from './entries-routing.module';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [EntryListComponent, EntryFormComponent ],
  imports: [
    EntriesRoutingModule,
    CalendarModule,
    IMaskModule,
    SharedModule
  ]
})
export class EntriesModule { }
