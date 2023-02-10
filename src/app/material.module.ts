import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
  ]
})
export class MaterialModule {}
