import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSection } from './components/about-section/about-section.component';
import { CommitteeFormComponent } from './components/committee-form/committee-form.component';

const routes: Routes = [
  { path: 'committee', component: CommitteeFormComponent },
  { path: 'about', component: AboutSection },
  { path: '', redirectTo: '/committee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
