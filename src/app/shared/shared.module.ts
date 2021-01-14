import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
