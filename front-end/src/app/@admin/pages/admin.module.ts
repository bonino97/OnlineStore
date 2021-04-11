import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from 'src/app/@admin/pages/admin-routing.module';
import { AdminComponent } from 'src/app/@admin/pages/admin.component';
import { NavbarComponent } from 'src/app/@admin/core/navbar/navbar.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

@NgModule({
  declarations: [AdminComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, AdminRoutingModule, CollapseModule],
})
export class AdminModule {}
