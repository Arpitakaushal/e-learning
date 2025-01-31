import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AdminRegisterComponent } from "./admin-register/admin-register.component";
import { StudentRegisterComponent } from "./student-register/student-register.component";
import { ContactComponent } from "./contact/contact.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/about', component: AboutComponent },
    { path: 'home/contact', component: ContactComponent },
    { path: 'home/register', component: RegisterComponent },
    { path: 'home/login', component: LoginComponent },
    { path: 'home/register/admin-register', component: AdminRegisterComponent },
    { path: 'home/register/student-register', component: StudentRegisterComponent },
    { path: 'home/login/register', component: RegisterComponent },
    { path: 'home/register/admin-register/login', component: LoginComponent },
    { path: 'home/register/professor-register/login', component: LoginComponent },
    { path: 'home/register/student-register/login', component: LoginComponent }
];