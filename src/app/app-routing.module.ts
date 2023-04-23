import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    // {
    //   path: 'company',
    //   loadChildren: () =>
    //     import('./pages/company/company.module').then((m) => m.CompanyModule),
    // },
    // {
    //   path: 'department',
    //   loadChildren: () =>
    //     import('./pages/department/department.module').then((m) => m.DepartmentModule),
    // },
    // {
    //   path: 'employee',
    //   loadChildren: () =>
    //     import('./pages/employee/employee.module').then((m) => m.EmployeeModule),
    // },
    // {
    //   path: 'position',
    //   loadChildren: () =>
    //     import('./pages/position/position.module').then((m) => m.PositionModule),
    // },
    // {
    //   path: 'operation',
    //   loadChildren: () =>
    //     import('./pages/operation/operation.module').then((m) => m.OperationModule),
    // },
  ],
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }


