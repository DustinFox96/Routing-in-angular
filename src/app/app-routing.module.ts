import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from "./home/home.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import {FormsModule} from "@angular/forms"
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { LoginComponent } from './user/login/login.component';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},

  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "help", component: HelpComponent},

  { path: "users/list", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "login", component: LoginComponent},

  {path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
