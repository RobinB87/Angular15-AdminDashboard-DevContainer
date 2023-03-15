
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule }from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule }from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  exports: [
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
